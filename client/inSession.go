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

	appTitle := canvas.NewText("inSession", lightblue)
	sessionTitle := container.New(layout.NewCenterLayout(),
		container.NewCenter(
			container.NewMax(
				container.New(layout.NewPaddedLayout(),
					canvas.NewRectangle(blue),
					canvas.NewText(" Session Title ", color.White)))))
	sessionData := container.NewCenter(canvas.NewText("Session Data", color.White))
	// test := container.NewMax(canvas.NewRectangle(green), sessionData)

	footer := container.New(layout.NewPaddedLayout(), container.NewMax(canvas.NewRectangle(color.Transparent), container.NewCenter(canvas.NewText("Footer", color.White))))

	top := container.New(layout.NewHBoxLayout(), layout.NewSpacer(), appTitle, layout.NewSpacer(), closeapp)
	topWrapper := container.NewMax(canvas.NewRectangle(color.Transparent), top)
	titleWrapper := container.New(layout.NewPaddedLayout(), container.NewMax(container.NewWithoutLayout(), sessionTitle))
	vspace := container.New(layout.NewVBoxLayout(), layout.NewSpacer(), canvas.NewText("", color.White), layout.NewSpacer())

	sessionDataWrapper := container.New(layout.NewPaddedLayout(), container.NewMax(canvas.NewRectangle(blue), sessionData))
	middle := container.New(layout.NewVBoxLayout(), vspace, titleWrapper, sessionDataWrapper, layout.NewSpacer(), footer)
	middleWrapper := container.New(layout.NewMaxLayout(), container.NewMax(canvas.NewVerticalGradient(lightblue, darkblue), middle))

	content := container.NewBorder(topWrapper, nil, nil, nil, middleWrapper)
	win.SetContent(content)
	win.SetFullScreen(true)
	win.ShowAndRun()
}
