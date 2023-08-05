package main

import (
	"context"
	"database/sql"
	"log"
	"os"
	"os/exec"
	"sort"

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
	StartTime string
	EndTime   string
	Presenter string
	ID        int
}

type Session struct {
	ctx       context.Context
	ID        int
	Title     string
	StartTime string
	EndTime   string
	Moderator string
	Room      string
}

type Room struct {
	ctx  context.Context
	Name string
	ID   int
}
type ByName []Session

// Utility sort functions
func (s ByName) Len() int           { return len(s) }
func (s ByName) Swap(i, j int)      { s[i], s[j] = s[j], s[i] }
func (s ByName) Less(i, j int) bool { return s[i].StartTime < s[j].StartTime }

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

func NewPresentation() *Presentation {
	return &Presentation{}
}

func NewSession() *Session {
	return &Session{}
}

func NewRoom() *Room {
	return &Room{}
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
		tell front document
        	set current slide to slide 1
		end tell
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

func (a *App) OpenFiles() {
	appleScriptCode := `tell application "Finder"
		activate
		
		open folder "Macintosh HD:Users:svperclvster:Documents:webdev:inSession:wails-client:files:room:test_room_01:Jul-22-2023"
		set current view of Finder window 1 to icon view
		set icon size of icon view options of Finder window 1 to 256
		end tell`
	cmd := exec.Command("osascript", "-e", appleScriptCode)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err := cmd.Run()
	if err != nil {
		log.Fatal(err)
	}
}

func (a *App) OpenMyPC() {
	openPCAppleScript := `tell application "Finder"
		activate
		
		open folder "Macintosh HD:Users:svperclvster:Desktop"
		set bounds of Finder window 1 to {0, 0, 1200, 1080}
		set current view of Finder window 1 to icon view
		set icon size of icon view options of Finder window 1 to 128
		end tell`
	cmd := exec.Command("osascript", "-e", openPCAppleScript)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err := cmd.Run()
	if err != nil {
		log.Fatal(err)
	}
}

// type ByTimestamp []Session

// func (s ByTimestamp) Len() int      { return len(s) }
// func (s ByTimestamp) Swap(i, j int) { s[i], s[j] = s[j], s[i] }

// func (s ByTimestamp) Less(i, j int) bool { return s[i].StartTime.Before(s[j].StartTime) }

func (a *App) GetPresentations(presentation_id int) []Presentation {
	// Fetching Data from database
	db, err := sql.Open("mysql", "admin:localdev@tcp(localhost:3306)/inSession")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// 2. Prepare and execute the query
	rows, err := db.Query("SELECT  * FROM subsessionData WHERE _session_id=?", presentation_id)
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

	var presentation Presentation
	presentations := []Presentation{}
	for rows.Next() {
		err := rows.Scan(&subsession_id, &session_id, &presenter, &subsession_title, &startTime, &endTime, &modName, &date_added)
		if err != nil {
			log.Fatal(err)
		}
		presentation.Presenter = presenter
		presentation.Title = subsession_title
		presentation.ID = subsession_id
		presentation.StartTime = startTime
		presentation.EndTime = endTime
		presentations = append(presentations, presentation)
	}

	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
	db.Close()
	return presentations
}

func (a *App) GetSessions(roomname string) []Session {
	var session Session
	sessions := []Session{}
	// Fetching Data from database
	db, err := sql.Open("mysql", "admin:localdev@tcp(localhost:3306)/inSession")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	// 2. Prepare and execute the query
	rows, err := db.Query("SELECT  * FROM sessionData WHERE room=?", roomname)
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	// 3. Handle the results
	var id int
	var title string
	var room string
	var startTime string
	var endTime string
	var modName string
	var date_added string
	for rows.Next() {
		err := rows.Scan(&id, &title, &room, &startTime, &endTime, &modName, &date_added)
		if err != nil {
			log.Fatal(err)
		}
		session.Title = title
		session.StartTime = startTime
		session.EndTime = endTime
		session.Room = room
		session.Moderator = modName
		session.ID = id
		sessions = append(sessions, session)

	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}

	db.Close()

	sort.Sort(ByName(sessions))

	return sessions
}

func (a *App) GetSession(session_id int) Session {
	var session Session
	// Fetching Data from database
	db, err := sql.Open("mysql", "admin:localdev@tcp(localhost:3306)/inSession")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// 2. Prepare and execute the query
	rows, err := db.Query("SELECT  * FROM sessionData WHERE session_id=?", session_id)
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	// 3. Handle the results
	var id int
	var title string
	var room string
	var startTime string
	var endTime string
	var modName string
	var date_added string

	for rows.Next() {
		err := rows.Scan(&id, &title, &room, &startTime, &endTime, &modName, &date_added)
		if err != nil {
			log.Fatal(err)
		}
		session.Title = title
		session.StartTime = startTime
		session.EndTime = endTime
		session.Room = room
		session.Moderator = modName

	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
	db.Close()
	return session
}

func (a *App) RoomList() []Room {

	// Fetching Data from database
	db, err := sql.Open("mysql", "admin:localdev@tcp(localhost:3306)/inSession")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// 2. Prepare and execute the query
	rows, err := db.Query("SELECT  DISTINCT `room` FROM sessionData")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	// 3. Handle the results
	rooms := []Room{}
	var room Room

	// var session_id int
	var name string
	var room_id int = 0
	for rows.Next() {
		err := rows.Scan(&name)
		if err != nil {
			log.Fatal(err)
		}
		room.Name = name
		room.ID = room_id
		rooms = append(rooms, room)
		room_id++
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
	db.Close()
	return rooms
}

// File sync function
// Function is called when room is SET. (Initial set up, or rooom change)
// Check exists(folder) for all sessions/presentations before starting to sync files.
// Potentially implemented as a unit test.

//	and then update all files in that room
//
// Chronological sync
// Update session in order
// Update prsentation

// TODO

// Figure out how often to call this function after initial set
// (Hourly? every 15 minutes? When a presentation is missing files?) This could cause n^n error
// potentially set up an event listener to listen to updates FROM server
// log
func (a *App) SyncFiles(roomname Room) {

}

// Function gets data for the RefreshFiles React component
// Should return a list of all Files for a given room
// File data should include name, path, lastModified, lastSynced,
func (a *App) FileSyncStatus(roomname Room) {

}

// Fetches session data when room is changed.
func (a *App) SetRoom(roomname string) Session {
	var session Session
	// Fetching Data from database
	db, err := sql.Open("mysql", "admin:localdev@tcp(localhost:3306)/inSession")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// 2. Prepare and execute the query
	rows, err := db.Query("SELECT  * FROM sessionData WHERE room=?", roomname)
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	// 3. Handle the results
	var id int
	var title string
	var room string
	var startTime string
	var endTime string
	var modName string
	var date_added string

	for rows.Next() {
		err := rows.Scan(&id, &title, &room, &startTime, &endTime, &modName, &date_added)
		if err != nil {
			log.Fatal(err)
		}
		session.Title = title
		session.StartTime = startTime
		session.EndTime = endTime
		session.Room = room
		session.Moderator = modName
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
	db.Close()
	return session
}
