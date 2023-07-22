package main

import "C"

import (
	"fmt"
	"image/color"
	"os"
	"os/exec"
	"time"

	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/canvas"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/theme"
	"fyne.io/fyne/v2/widget"
)

func openFileOnClick() error {
	wd, _ := os.Getwd()
	filepath := (wd + "/go/files/room/test_room_01/Jul-22-2023/inSession.key")
	// fmt.Println(filepath)
	cmd := exec.Command("open", filepath)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	// cmd.Std
	return cmd.Run()

}

func main() {
	a := app.New()
	win := a.NewWindow("inSession")
	blue := color.NRGBA{R: 27, G: 122, B: 221, A: 255}
	lightblue := color.NRGBA{R: 58, G: 158, B: 255, A: 255}
	darkblue := color.NRGBA{R: 22, G: 56, B: 175, A: 255}
	// green := color.NRGBA{R: 17, G: 182, B: 121, A: 255}

	fmt.Printf("Starting inSession..\n\n")

	// Fetching Data from database
	db, err := sql.Open("mysql", "admin:localdev@tcp(localhost:3306)/inSession")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// 2. Prepare and execute the query
	rows, err := db.Query("SELECT  * FROM subsessionData WHERE _session_id=1")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	// 3. Handle the results
	var subsession_id int
	var session_id int
	var presenter string
	var subsession_title string
	var startTime string
	var endTime string
	var modName string
	var date_added string
	var user_id int
	var user_name string
	presenterList := []string{}
	subTitleList := []string{}
	startTimeList := []string{}
	for rows.Next() {
		err := rows.Scan(&subsession_id, &session_id, &presenter, &subsession_title, &startTime, &endTime, &modName, &date_added, &user_id, &user_name)
		if err != nil {
			log.Fatal(err)
		}
		presenterList = append(presenterList, presenter)
		subTitleList = append(subTitleList, subsession_title)
		startTimeList = append(startTimeList, startTime)
	}

	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}

	// App Code
	closeapp := container.New(layout.NewGridLayout(4), layout.NewSpacer(), layout.NewSpacer(), layout.NewSpacer(), widget.NewButtonWithIcon("", theme.CancelIcon(), func() {
		a.Quit()

	}))
	sTitle := canvas.NewText(" Introducing inSession ", color.White)
	sessionTime := canvas.NewText(time.Now().Format(time.DateOnly), color.White)
	moderator := canvas.NewText(" Motoko Kusanagi ", color.White)
	sTitle.TextSize, sessionTime.TextSize, moderator.TextSize = 50, 30, 26
	appTitle := container.NewCenter(canvas.NewText("inSession", lightblue))
	titleContainer := container.NewCenter(sTitle)
	timeContainer := container.NewCenter(sessionTime)
	modContainer := container.NewCenter(moderator)
	sessionInfo := container.NewCenter(
		container.New(layout.NewVBoxLayout(), titleContainer, timeContainer, modContainer))
	sessionInfoWrapper := container.New(layout.NewGridLayoutWithColumns(3), layout.NewSpacer(), sessionInfo, layout.NewSpacer())

	presentationTitle, pTime := canvas.NewText("inSesion software demo", color.White), canvas.NewText("Alejandro Cortes", color.White)
	presentationTitle.TextSize, pTime.TextSize = 20, 18

	pInfoWrapper := container.New(layout.NewGridLayout(1), widget.NewButtonWithIcon("", theme.FileApplicationIcon(), func() {
		openFileOnClick()
		win.Close()
	}))
	// subTitleList := []string{}
	presentations := make([]*canvas.Text, len(presenterList))
	for i := 0; i < len(presenterList); i++ {
		box := canvas.NewText(presenterList[i], color.White)
		box.Resize(fyne.NewSize(50, 50))
		presentations[i] = box
	}

	pCont2 := make([]*fyne.Container, len(presenterList))
	for i := 0; i < len(presenterList); i++ {
		subtitle := canvas.NewText(subTitleList[i], color.White)
		subtitle.TextSize = 30
		box := container.New(layout.NewVBoxLayout(),
			subtitle,
			canvas.NewText(presenterList[i], color.White),
			canvas.NewText(subTitleList[i], color.White),
			pInfoWrapper)
		box.Resize(fyne.NewSize(50, 50))
		pCont2[i] = box
	}
	presContainer := container.New(layout.NewGridLayout(3), pCont2[0], pCont2[1], pCont2[2])
	dataTable := container.NewMax(canvas.NewRectangle(color.Transparent), presContainer)
	dataContainer := container.New(layout.NewGridLayout(3),
		layout.NewSpacer(), container.NewMax(
			canvas.NewRectangle(color.Transparent), container.NewCenter(dataTable), layout.NewSpacer()))
	currentTime := container.NewCenter(canvas.NewText(time.Now().Format(time.Kitchen), blue))

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
	middle := container.New(layout.NewGridLayoutWithRows(3), sessionInfoWrapper, dataContainer, footer)
	middleWrapper := container.New(layout.NewMaxLayout(), container.NewMax(canvas.NewVerticalGradient(lightblue, darkblue), middle))

	content := container.NewBorder(topWrapper, nil, nil, nil, middleWrapper)
	win.SetContent(content)
	win.SetFullScreen(true)
	win.ShowAndRun()
}
