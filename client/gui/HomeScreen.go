package gui

import (
	"image/color"
	"time"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"
)

func HomeScreen(app fyne.App) fyne.Window {

	lightblue := color.NRGBA{R: 58, G: 158, B: 255, A: 255}
	// darkblue := color.NRGBA{R: 22, G: 56, B: 175, A: 255}
	blue := color.NRGBA{R: 27, G: 122, B: 221, A: 255}
	currentTime := container.NewCenter(canvas.NewText(time.Now().Format(time.Kitchen), blue))
	closeapp := container.New(layout.NewGridLayout(4), layout.NewSpacer(), layout.NewSpacer(), layout.NewSpacer(), widget.NewButtonWithIcon("", theme.CancelIcon(), func() {
		app.Quit()

	}))
	appTitle := container.NewCenter(canvas.NewText("inSession", lightblue))
	top := container.New(layout.NewGridLayout(5),
		container.New(layout.NewHBoxLayout(), widget.NewButtonWithIcon("", theme.HomeIcon(), func() {
		}), currentTime),
		layout.NewSpacer(), appTitle,
		layout.NewSpacer(), closeapp)

	text := canvas.NewText("Home screen content", color.White)
	text.TextSize = 40
	content := container.New(layout.NewMaxLayout(), canvas.NewRectangle(blue), container.NewCenter(text))
	myWindow := app.NewWindow("Main Window")
	myWindow.SetContent(container.NewBorder(top, nil, nil, nil, content))

	return myWindow
}
