package main

import (
	"image/color"
	"time"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"
)

// Home Screen Content
func HomeScreen(app fyne.App) fyne.Window {
	blue := color.NRGBA{R: 27, G: 122, B: 221, A: 255}
	lightblue := color.NRGBA{R: 58, G: 158, B: 255, A: 255}
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

	myWindow := app.NewWindow("Main Window")
	helpButton := widget.NewButton("Help", func() {
		myWindow.Hide()
	})

	buttonsContainer := container.NewHBox(helpButton)
	content := container.New(layout.NewMaxLayout(), canvas.NewRectangle(blue), container.NewCenter(text), buttonsContainer)
	myWindow.SetContent(container.NewBorder(top, nil, nil, nil, content))

	return myWindow
}

func HelpScreen(app fyne.App) fyne.Window {
	myWindow := app.NewWindow("Help Window")
	text := canvas.NewText("Getting the hang of it??", color.White)
	text.TextSize = 40
	// Home
	myWindow.SetContent(container.New(
		layout.NewMaxLayout(),
		(canvas.NewRectangle(color.NRGBA{R: 20, G: 220, B: 140, A: 255})),
		container.NewCenter(text)))
	// myWindow.SetFullScreen(true)

	return myWindow
}

func main() {

	app := app.New()

	homeWindow := HomeScreen(app)
	helpWindow := HelpScreen(app)
	homeWindow.SetMaster()

	// Button to navigate back to the main window
	homeButton := widget.NewButton("Home", func() {
		helpWindow.Hide()
		homeWindow.Show()
	})
	helpButton := widget.NewButton("Help", func() {
		homeWindow.Hide()
		helpWindow.Show()
	})
	buttonsContainer := container.NewHBox(homeButton, helpButton)

	homeWindow.SetContent(container.NewVBox(
		widget.NewLabel("Home Window"),
		buttonsContainer,
	))

	helpWindow.SetContent(container.NewVBox(
		widget.NewLabel("Help Window"),
		buttonsContainer,
	))
	// homeWindow.SetFullScreen(true)
	homeWindow.Show()
	// helpWindow.Show()
	app.Run()
}
