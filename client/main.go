package main

import (
	"client/gui"
	"image/color"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/widget"
)

func HomeScreen(app fyne.App) fyne.Window {
	myWindow := app.NewWindow("Main Window")
	text := canvas.NewText("Getting the hang of it?", color.White)
	text.TextSize = 40
	// Home
	myWindow.SetContent(container.New(
		layout.NewMaxLayout(),
		(canvas.NewRectangle(color.NRGBA{R: 20, G: 220, B: 140, A: 255})),
		container.NewCenter(text)))
	// myWindow.SetFullScreen(true)

	return myWindow
}

// func HelpScreen(app fyne.App) fyne.Window {
// 	myWindow := app.NewWindow("Main Window")

// 	// 	// Home
// 	myWindow.SetContent(container.New(
// 		layout.NewMaxLayout(),
// 		(canvas.NewRectangle(color.NRGBA{R: 20, G: 220, B: 140, A: 255})),
// 		container.NewCenter(canvas.NewText("How goes it?", color.White))))
// 	// myWindow.SetFullScreen(true)

//		return myWindow
//	}
func main() {

	app := app.New()
	// hi := canvas.NewText("Hello Fyneeee", color.White)
	homeWindow := HomeScreen(app)
	helpWindow := gui.HelpScreen(app)

	// homeWindow.SetContent(container.New(layout.NewGridLayout(1), hi))

	// Button to navigate back to the main window
	homeButton := widget.NewButton("Back", func() {
		helpWindow.Hide()
		homeWindow.Show()
	})
	helpButton := widget.NewButton("Help", func() {
		homeWindow.Hide()
		helpWindow.Show()
	})
	buttonsContainer := container.NewHBox(homeButton, helpButton)

	// homeWindow.SetContent(container.NewVBox(
	// 	widget.NewLabel("Main Window"),
	// 	buttonsContainer,
	// ))

	helpWindow.SetContent(container.NewVBox(
		widget.NewLabel("Help Window"),
		buttonsContainer,
	))

	homeWindow.SetFullScreen(true)
	// helpWindow.SetFullScreen(true)
	homeWindow.ShowAndRun()
}
