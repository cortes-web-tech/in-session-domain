package main

import (
	"image/color"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
)

func main() {
	a := app.New()
	win := a.NewWindow("inSession")

	blue := color.NRGBA{R: 27, G: 122, B: 221, A: 255}
	text1 := canvas.NewText("inSession", blue)
	text2 := canvas.NewText("PM", blue)
	text1.Move(fyne.NewPos(700, 0))
	text2.Move(fyne.NewPos(700, 20))

	// buttonStyle := &widget.Style{
	// 	BackgroundColor: theme.ColorSecondary,
	// 	Color:           theme.TextColor(),
	// }
	button := widget.NewButton("X", func() {
		a.Quit()

	})
	// button.Move(fyne.NewPos(200, 0))
	content2 := container.NewWithoutLayout(text1, text2)
	content := container.NewVBox(
		button, content2,
	)
	win.SetContent(content)

	// hBox := container.New(layout.NewHBoxLayout(), layout.NewSpacer(), button, layout.NewSpacer())
	win.SetFullScreen(true)
	win.ShowAndRun()
}
