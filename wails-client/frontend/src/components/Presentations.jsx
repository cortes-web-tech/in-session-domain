import {React, useState, useEffect} from 'react'
import { StartPresentation, GetSessionData, OpenFiles } from '../../wailsjs/go/main/App'
function Presentations() {
  console.log(GetSessionData)
  const [presentations, setPresentations] = useState([]);
  useEffect(()=> {
    // setPresentations()
    getSessionData()
    // OpenFiles()
  },[])
  
  const [resultText, setResultText] = useState()
  const updateText = (result) =>setResultText(result);
  const updatePresentations = (result) =>setPresentations(result)
  function openFiles(){
    OpenFiles().then(updateText)
  }

  function getSessionData(){
    GetSessionData().then(updatePresentations)
  }

  return (
    <div>
      <div className='presentations'>
        {presentations.map((presentation,key)=>(
          <div className='presentation' key={presentation.ID}>
            <h1>{presentation.Title}</h1>
            <h3>{presentation.Time}</h3>
            <h2>{presentation.Presenter}</h2>
            <div className='presentationButtons'>
              <button onClick={openFiles}>Files</button>
              <button onClick={StartPresentation}>Start</button>
            </div>
            {resultText}
          </div>
        ))}
       
        </div>
        <div>                              
      </div>

    </div>
  )
}

export default Presentations