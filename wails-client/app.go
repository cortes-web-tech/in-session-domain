package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/exec"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) OpenFileOnClick() {
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
