import {React, useState, useEffect} from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
function CreatePresentation({onDataFromChild}) {
    const [addPresentationTitle, setAddPresentationTitle] = useState([]);
    const [addPresenter, setAddPresenter] = useState([]);
    const [presenterList, setPresenterList] = useState([]);
    const [error, setError] = useState([]);

    useEffect(()=>{
        getPresenterList()
    }, [])
    const session_id = useLocation().state.session_id
    const handleInputChange = (e, type) => {
        switch (type) {
          case "title":
            setError("");
            setAddPresentationTitle(e.target.value);
            if (e.target.value === "") {
              setError("Subsession title left blank.");
            }
            break;
          case "presenter":
            setError("");
            setAddPresenter(e.target.value);
            if (e.target.value === "") {
              setError("Presenter left blank.");
            }
            break;
        }
      };

    function addNewPresentation() {
        if (addPresentationTitle == "" || addPresenter == "") {
          setError("Blank field. Please check the session you're trying to add.");
        } else {
          console.log("Adding presentation");
          axios
            .post("http://localhost/api/createSubsession.php", {
              session_id: session_id,
              title: addPresentationTitle,
              presenter: addPresenter,
            })
            .then((res) => {
                onDataFromChild(false)
                console.log(res.data)
            })
            .catch((err) => console.log(err));
        }
      }

    function getPresenterList() {
    axios
        .get("http://localhost/api/presenterList.php")
        .then((res) => {
        setPresenterList(res.data);   
        })
        .catch((err) => console.log(err));
    }

    function dropDown(presenter) {
        setAddPresenter(presenter);
      }
  return (
    <div>
     <div>
      <label>Presentation Title</label>
      <input
        type="text"
        value={addPresentationTitle}
        onChange={(e) => handleInputChange(e, "title")}
        placeholder="Title"
      />
      <label>Presenter</label>
      <select onChange={(e) => dropDown(e.target.value)}>
        {presenterList.map((presenter) => {
          return <option>{presenter}</option>;
        })}
      </select>
      <input
        type="submit"
        defaultValue="Log in"
        id="login_button"
        onClick={addNewPresentation}
      />
    </div> 
    {error !== "" ? <span className="error">{error}</span> : ""}
  </div>
  )
}

export default CreatePresentation