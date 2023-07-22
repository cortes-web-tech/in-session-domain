package main

import (
	"fmt"
	"image/color"
	"time"

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

	closeapp := container.New(layout.NewGridLayout(4), layout.NewSpacer(), layout.NewSpacer(), layout.NewSpacer(), widget.NewButtonWithIcon("", theme.CancelIcon(), func() {
		a.Quit()
	}))
	sTitle := canvas.NewText(" Session Title ", color.White)
	sessionTime := canvas.NewText(" Time ", color.White)
	moderator := canvas.NewText(" Moderator ", color.White)
	sTitle.TextSize, sessionTime.TextSize, moderator.TextSize = 50, 30, 26
	appTitle := container.NewCenter(canvas.NewText("inSession", lightblue))
	titleContainer := container.NewCenter(sTitle)
	timeContainer := container.NewCenter(sessionTime)
	modContainer := container.NewCenter(moderator)
	sessionInfo := container.NewCenter(
		container.New(layout.NewVBoxLayout(), titleContainer, timeContainer, modContainer))
	sessionInfoWrapper := container.New(layout.NewGridLayoutWithColumns(3), layout.NewSpacer(), sessionInfo, layout.NewSpacer())

	presentationTitle, pTime := canvas.NewText("Presentation info", color.White), canvas.NewText("Presenter name", color.White)
	presentationTitle.TextSize, pTime.TextSize = 20, 18

	pInfoWrapper := container.New(layout.NewGridLayout(1), presentationTitle, pTime, widget.NewButtonWithIcon("", theme.FileApplicationIcon(), func() {}))
	dataTable := container.New(layout.NewGridLayout(3), layout.NewSpacer(), container.NewMax(canvas.NewRectangle(lightblue), container.NewCenter(pInfoWrapper), layout.NewSpacer()))
	currentTime := container.NewCenter(canvas.NewText(time.Now().Format(time.RFC1123), blue))

	iconInfo := container.New(layout.NewGridLayout(4),
		container.NewCenter(canvas.NewText("Refresh", color.White)),
		container.NewCenter(canvas.NewText("Files", color.White)),
		container.NewCenter(canvas.NewText("Help", color.White)),
		container.NewCenter(canvas.NewText("How-to", color.White)),
		container.NewCenter(widget.NewButtonWithIcon("", theme.FileIcon(), func() {})),
		container.NewCenter(widget.NewButtonWithIcon("", theme.ComputerIcon(), func() {})),
		container.NewCenter(widget.NewButtonWithIcon("", theme.AccountIcon(), func() {})),
		container.NewCenter(widget.NewButtonWithIcon("", theme.HelpIcon(), func() {})),
	)
	dayChoose := container.New(layout.NewGridLayout(3),
		layout.NewSpacer(), layout.NewSpacer(), layout.NewSpacer(),
		container.NewCenter(widget.NewButtonWithIcon("", theme.NavigateBackIcon(), func() {})),
		container.NewCenter(canvas.NewText(time.Now().Format(time.DateOnly), color.White)),
		container.NewCenter(widget.NewButtonWithIcon("", theme.NavigateNextIcon(), func() {})))

	chooseDay := container.NewMax(canvas.NewRectangle(color.Transparent), container.New(layout.NewGridLayout(1), canvas.NewRectangle(color.Transparent), container.New(layout.NewGridLayout(1), dayChoose)))
	helpInfo := container.NewMax(canvas.NewRectangle(color.Transparent), container.New(layout.NewGridLayout(1), layout.NewSpacer(), iconInfo))
	footer := container.New(layout.NewGridLayoutWithColumns(3), chooseDay, layout.NewSpacer(), helpInfo)
	top := container.New(layout.NewGridLayout(5), currentTime, layout.NewSpacer(), appTitle, layout.NewSpacer(), closeapp)
	topWrapper := container.NewMax(canvas.NewRectangle(color.Transparent), top)
	middle := container.New(layout.NewGridLayoutWithRows(3), sessionInfoWrapper, dataTable, footer)
	middleWrapper := container.New(layout.NewMaxLayout(), container.NewMax(canvas.NewVerticalGradient(lightblue, darkblue), middle))

	content := container.NewBorder(topWrapper, nil, nil, nil, middleWrapper)
	win.SetContent(content)
	win.SetFullScreen(true)
	win.ShowAndRun()
}
