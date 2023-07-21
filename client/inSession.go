package main

import (
	"fmt"
	"image/color"

	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/layout"

	// "fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"
)

func main() {
	a := app.New()
	win := a.NewWindow("inSession")

	fmt.Printf("Starting inSession..\n\n")

	closeapp := widget.NewButton("X", func() {
		a.Quit()
		fmt.Println("App closed successfully.")
	})
	blue := color.NRGBA{R: 27, G: 122, B: 221, A: 255}
	green := color.NRGBA{R: 17, G: 182, B: 121, A: 255}
	// closeapp.ExtendBaseWidget(closeapp)
	appTitle := canvas.NewText("inSession", blue)
	sessionTitle := container.NewCenter(canvas.NewText("Session Title", color.White))
	sessionData := container.NewCenter(canvas.NewText("Session Data", color.White))

	closeAppButton := container.NewMax(canvas.NewRectangle(green), closeapp)
	top := container.New(layout.NewHBoxLayout(), layout.NewSpacer(), appTitle, layout.NewSpacer(), closeAppButton)
	wrapper := container.NewMax(canvas.NewRectangle(blue), sessionTitle)

	sessionDataWrapper := container.NewMax(canvas.NewRectangle(blue), sessionData)
	middle := container.New(layout.NewGridLayoutWithRows(2), wrapper, sessionDataWrapper)

	content := container.NewBorder(top, nil, nil, nil, middle)

	win.SetContent(content)
	win.SetFullScreen(true)
	win.ShowAndRun()
}
