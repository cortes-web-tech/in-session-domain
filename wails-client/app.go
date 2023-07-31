package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"os"
	"os/exec"

	_ "github.com/go-sql-driver/mysql"
)

// App struct
type App struct {
	ctx context.Context
}

// Presentation struct
type Presentation struct {
	ctx       context.Context
	Title     string
	Time      string
	Presenter string
	ID        int
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

func NewPresentation() *Presentation {
	return &Presentation{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) shutdown(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) StartPresentation() {
	applescriptCode := `tell application "Keynote"
		activate
		open "/Users/svperclvster/go/files/room/test_room_01/Jul-22-2023/inSession.key"	
		
		tell application "System Events"
			keystroke "p" using {command down, option down}
		end tell
	end tell
	`
	cmd := exec.Command("osascript", "-e", applescriptCode)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err := cmd.Run()
	if err != nil {
		log.Fatal(err)
	}

}

func (a *App) OpenFiles() string {

	return fmt.Sprint("Function WIP\n")
}

func (a *App) GetSessionData() []Presentation {
	// Fetching Data from database
	db, err := sql.Open("mysql", "admin:localdev@tcp(localhost:3306)/inSession")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// 2. Prepare and execute the query
	rows, err := db.Query("SELECT  * FROM subsessionData WHERE _session_id=1")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	// 3. Handle the results
	var subsession_id int
	var session_id int
	var presenter string
	var subsession_title string
	var startTime string
	var endTime string
	var modName string
	var date_added string
	var user_id int
	var user_name string
	var presentation Presentation
	presentations := []Presentation{}
	for rows.Next() {
		err := rows.Scan(&subsession_id, &session_id, &presenter, &subsession_title, &startTime, &endTime, &modName, &date_added, &user_id, &user_name)
		if err != nil {
			log.Fatal(err)
		}
		presentation.Presenter = presenter
		presentation.Title = subsession_title
		presentation.ID = subsession_id
		presentation.Time = startTime
		presentations = append(presentations, presentation)
	}

	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
	return presentations
}
