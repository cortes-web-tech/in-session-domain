import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const CreateSession = ({onDataFromChild}) => {
  const [title, setTitle] = useState([]);
  const [moderator, setModerator] = useState([]);
  const [room, setRoom] = useState([]);
  const [error, setError] = useState([]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "title":
        setError("");
        setTitle(e.target.value);
        if (e.target.value === "") {
          setError("Title left blank.");
        }
        break;
      case "moderator":
        setError("");
        setModerator(e.target.value);
        if (e.target.value === "") {
          setError("Moderator left blank.");
        }
        break;
      case "room":
        setError("");
        setRoom(e.target.value);
        if (e.target.value === "") {
          setError("Room left blank.");
        }
        break;
    }
  };

  function createSession() {
    if (title == "" || moderator == "") {
      setError("Field was left blank on submit.");
    } else {
      console.log("Adding session " + title);

      axios
        .post("http://localhost/api/createSession.php", {
          title: title,
          room: room,
          moderator: moderator,
        })
        .then((res) => {
          onDataFromChild(false)
          console.log(res.data)
        })        
        .catch((err) => console.log(err));
    }
  }
  return (
    <div>
      Create Session
      <div>
        <label>Session Title </label>
        <input
          type="text"
          value={title}
          onChange={(e) => handleInputChange(e, "title")}
          placeholder="Session Title"
        />
        <label> Room </label>
        <input
          type="text"
          value={room}
          onChange={(e) => handleInputChange(e, "room")}
          placeholder="Room"
        />

        <label> Moderator </label>
        <input
          type="text"
          value={moderator}
          onChange={(e) => handleInputChange(e, "moderator")}
          placeholder="Moderator"
        />

        <input
          type="submit"
          defaultValue="submit"
          id="login_button"
          onClick={createSession}
        />
      </div>
      {error ? error : ""}
    </div>
  );
};

export default CreateSession;