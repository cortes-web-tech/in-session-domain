import {React, useState, useEffect} from 'react'
import { StartPresentation, GetPresentations, OpenFiles, GetSession } from '../../wailsjs/go/main/App'
import Moment from 'moment'
function Presentations(props) {
  const [presentations, setPresentations] = useState([]);
  const [presentationId, setPresentationId] = useState(0)
  useEffect(()=> {
    // setPresentations()
    getPresentations(props.session)    
  },[props.session])  
  
  const updateText = (result) =>setResultText(result);
  function openFiles(){
    OpenFiles().then(updateText)
  }
  
  const updatePresentations = (result) =>setPresentations(result)
  function getPresentations(props){
    GetPresentations(props).then(updatePresentations)
  } 

  return (
    <div>
      <div className='presentations'>                
        {presentations.length > 0 ?
        presentations.map((presentation,key)=>(
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
          </div>
        ))
        : "No presentations have been added to this session yet."}
       
        </div>
        <div>                              
      </div>

    </div>
  )
}

export default Presentations