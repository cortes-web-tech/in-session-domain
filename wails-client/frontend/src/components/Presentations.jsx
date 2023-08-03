import {React, useState, useEffect} from 'react'
import { StartPresentation, GetPresentations, OpenFiles, GetSession } from '../../wailsjs/go/main/App'
import Moment from 'moment'
function Presentations() {
  const [presentations, setPresentations] = useState([]);
  
  useEffect(()=> {
    // setPresentations()
    getPresentations()
    // OpenFiles()
  },[])
  
  const [resultText, setResultText] = useState()
  const updateText = (result) =>setResultText(result);
  const updatePresentations = (result) =>setPresentations(result)
  
  function openFiles(){
    OpenFiles().then(updateText)
  }

  function getPresentations(){
    GetPresentations().then(updatePresentations)
  }

 

  return (
    <div>
      <div className='presentations'>
        {presentations.map((presentation,key)=>(
          <div className='presentation' key={presentation.ID}>
            <h1>{presentation.Title}</h1>
            <h3>
            {Moment(presentation.StartTime).format("h:mmA") + " - " + Moment(presentation.EndTime).format("h:mmA")}
            </h3>
            <h2>{presentation.Presenter}</h2>
            <div className='presentationButtons'>
              <button onClick={StartPresentation}>Start</button>
              <button onClick={openFiles}>Files</button>
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