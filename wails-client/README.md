# Version History

## 0.0.46

- Deleted old mac app (./client)
- Stable version
- Added some comments to app.go for the next two functions. SyncFiles() & FileSyncStatus().
- GUI changes
- Added a new function 'SetRoom()' to properly change Session GUI when room is changed
- Identified a new bug after changing rooms
  - Session isn't passing data correctly down to Presentation
  - Session back/next bugs out sometimes.
    - In some cases (i think it's where sessionList.length < 2), sessionList isn't properly emptied/refresh
    - shows session from incorrect room T.T
- Added filter to footer navigation to show previous/back buttons correctly.
  - Need to pass this index up to session to change sessions correctly ✅
- Footer Navigation is passing index up to Session component
  - Need to add an event listener in Session component to display the right presentation based off index. ✅
  - Need to adjust for undefined (set to 0)
- Footer navigation is Presentation GUI, but
  - Session GUI not changing ✅
  - has a undefined value bug when initially loading.
- Footer navigation is changing sessions correctly.
  - causes a bug if you change rooms and index > SessionList.length, for the room you're changing to
  - Need to add/adjust indexHandler
- roomChange() is setting presentation to a n-1 state
- Temporarily lowered transparency to watch Baldur's Gate stream on Discord 😂
- Changing how Footer interacts with Session/Presentation to decrease prop drilling/state issues.
- Footer navigation now correctly changes Presentation/Session
- Added the WindowReload() built in function to clear a potential memory leak when switching sessions.

## 0.0.45

- Built GUI scaffolding using wails
- Added button function to open file
- Linked presentation data from SQL DB to client app
- Linked session data, displaying on GUI
- Formatted times on GUI
- Added day selector to GUI. Not connected to back end yet.
- AppleScript hotfixes to assign right folder/slide on presentation
- Added room selector GUI, room selector fetching correct data from DB.
- Added translucent background, added CSS grid template
- Room selection passes data up to App
- App uses a context provider to pass the room down to the rest of the app 😎
- Beginning to add session selection
- Footer Nav is receiving correct session data when room is changed.
- Beginning to add day selection functionality
- Added sorting so Sessions are returned in order by time. 👌🏼
- Session selector changes dates on GUI, passing to presentation is next
- Working on Context Provider to get data to Session/Presentation.
- Selector showing on Session page while WIP
- GUI WIP selector navigates through the sessions. Although kinda glitchy.
- May need to add more data to the database to clear some more edge cases.
- Hotfixed deleted a couple of redundant/unused columns on DB to better show data between sessions
- Added a filter to chek when sessions don't have any presentations added to the database.
- Identified a series of bugs in Presentations.
  - Need to handle the session data change when the room is changed ✅
  - Need to add unit test to Session.jsx (data integrity)
  - Need to add unit test Presentation.jsx (data integrity)
