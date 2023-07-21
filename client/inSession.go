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
	red := color.NRGBA{R: 222, G: 22, B: 21, A: 255}
	closeapp.ExtendBaseWidget(closeapp)
	inSession := canvas.NewText("inSession", blue)
	sessionTitle := canvas.NewText("Session Title", color.White)
	sessionData := canvas.NewText("SessionData", color.White)

	closeAppButton := container.NewMax(canvas.NewRectangle(red), closeapp)
	top := container.New(layout.NewHBoxLayout(), layout.NewSpacer(), inSession, layout.NewSpacer(), closeAppButton)
	wrapper := container.NewMax(canvas.NewRectangle(blue), sessionTitle)
	sessionDataWrapper := container.NewCenter(canvas.NewRectangle(blue), sessionData)
	middle := container.NewMax(canvas.NewRectangle(blue), wrapper, layout.NewSpacer(), sessionDataWrapper)

	content := container.NewBorder(top, nil, nil, nil, middle)

	win.SetContent(content)
	win.SetFullScreen(true)
	win.ShowAndRun()
}
