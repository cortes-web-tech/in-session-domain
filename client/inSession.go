package main

import (
	"fmt"
	"image/color"

	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/widget"
)

func main() {
	a := app.New()
	win := a.NewWindow("inSession")
	// win.Resize(fyne.NewSize(2560, 1600))
	fmt.Printf("Starting inSession..\n\n")
	// blue := color.NRGBA{R: 27, G: 122, B: 221, A: 255}
	// text1 := canvas.NewText("Welcome to inSession", blue)
	closeapp := widget.NewButton("close", func() {
		a.Quit()
		fmt.Println("App closed successfully.")
	})

	title := canvas.NewText("inSession", color.White)
	// button := canvas.NewText("Close", color.White)
	// button := canvas.New
	top := container.New(layout.NewHBoxLayout(), layout.NewSpacer(), title, layout.NewSpacer(), closeapp)

	// top.Move(fyne.NewPos(800, 0))
	// top := canvas.NewText("inSession", color.White)
	// left := canvas.NewText("left", color.White)
	middle := canvas.NewRectangle(color.NRGBA{R: 27, G: 122, B: 221, A: 255})
	content := container.NewBorder(top, nil, nil, nil, middle)

	win.SetContent(content)
	win.SetFullScreen(true)
	win.ShowAndRun()
}
