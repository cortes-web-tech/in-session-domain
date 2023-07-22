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
	darkblue := color.NRGBA{R: 22, G: 56, B: 175, A: 255}
	// green := color.NRGBA{R: 17, G: 182, B: 121, A: 255}

	fmt.Printf("Starting inSession..\n\n")

	closeapp := widget.NewButtonWithIcon("", theme.CancelIcon(), func() {
		a.Quit()
	})
	sTitle := canvas.NewText(" Session Title ", color.White)
	sessionTime := canvas.NewText(" Time ", color.White)
	moderator := canvas.NewText(" Modeator ", color.White)
	sTitle.TextSize, sessionTime.TextSize, moderator.TextSize = 50, 30, 26
	appTitle := canvas.NewText("inSession", blue)
	titleContainer := container.NewCenter(sTitle)
	timeContainer := container.NewCenter(sessionTime)
	modContainer := container.NewCenter(moderator)
	sessionInfo := container.NewCenter(
		container.New(layout.NewVBoxLayout(), titleContainer, timeContainer, modContainer))
	sessionInfoWrapper := container.New(layout.NewHBoxLayout(), layout.NewSpacer(), sessionInfo, layout.NewSpacer())
	dataTable := container.NewMax(canvas.NewRectangle(color.Transparent))
	currentTime := container.NewCenter(canvas.NewText(" Time ", color.White))
	// iconContainer := container.New(layout.NewPaddedLayout(), layout.NewSpacer())
	helpInfo := container.NewMax(canvas.NewRectangle(lightblue), container.New(layout.NewVBoxLayout(), currentTime))
	footer := container.New(layout.NewHBoxLayout(), layout.NewSpacer(), layout.NewSpacer(), helpInfo)

	top := container.New(layout.NewHBoxLayout(), layout.NewSpacer(), appTitle, layout.NewSpacer(), closeapp)
	topWrapper := container.NewMax(canvas.NewRectangle(color.Transparent), top)
	middle := container.New(layout.NewGridLayoutWithRows(3), sessionInfoWrapper, dataTable, footer)
	middleWrapper := container.New(layout.NewMaxLayout(), container.NewMax(canvas.NewVerticalGradient(lightblue, darkblue), middle))

	content := container.NewBorder(topWrapper, nil, nil, nil, middleWrapper)
	win.SetContent(content)
	win.SetFullScreen(true)
	win.ShowAndRun()
}
