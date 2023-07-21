package main

import (
	"fmt"
	"image/color"

	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/layout"

	"fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"
)

func main() {
	a := app.New()
	win := a.NewWindow("inSession")
	blue := color.NRGBA{R: 27, G: 122, B: 221, A: 255}
	lightblue := color.NRGBA{R: 58, G: 158, B: 255, A: 255}
	green := color.NRGBA{R: 17, G: 182, B: 121, A: 255}
	// red := color.NRGBA{R: 170, G: 18, B: 12, A: 255}

	fmt.Printf("Starting inSession..\n\n")

	closeapp := widget.NewButtonWithIcon("", theme.CancelIcon(), func() {
		a.Quit()
		fmt.Println("App closed successfully.")
	})

	appTitle := canvas.NewText("inSession", lightblue)
	sessionTitle := container.NewCenter(canvas.NewText("Session Title", color.White))
	sessionData := container.NewCenter(canvas.NewText("Session Data", color.White))

	tableData := container.NewMax(canvas.NewRectangle(blue), container.NewCenter(canvas.NewText("data tablesss", color.White)))

	top := container.New(layout.NewHBoxLayout(), layout.NewSpacer(), appTitle, layout.NewSpacer(), closeapp)
	topWrapper := container.NewMax(canvas.NewRectangle(color.Transparent), top)
	wrapper := container.NewMax(canvas.NewRectangle(blue), sessionTitle)
	sessionDataWrapper := container.NewMax(canvas.NewRectangle(blue), sessionData)
	box3 := container.NewMax(canvas.NewRectangle(green), container.NewCenter(canvas.NewText("box 3", color.White)))
	middle := container.New(layout.NewGridLayoutWithRows(4), wrapper, sessionDataWrapper, box3, tableData)
	middleWrapper := container.NewMax(canvas.NewRectangle(lightblue), middle)

	content := container.NewBorder(topWrapper, nil, nil, nil, middleWrapper)
	win.SetContent(content)
	win.SetFullScreen(true)
	win.ShowAndRun()
}
