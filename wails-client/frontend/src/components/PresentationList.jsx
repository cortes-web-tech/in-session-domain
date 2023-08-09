import {React, useState, useEffect, useContext} from 'react'
import { StartPresentation, GetPresentations, OpenFiles, GetSession, RefreshFileList } from '../../wailsjs/go/main/App'
import Moment from 'moment'
function PresentationList(props) {
  const [presentations, setPresentations] = useState([]);
//   const [presentationId, setPresentationId] = useState(0)
  const [filelist, setFilelist] = useState()
//   const room = useContext(HeaderContext)
  useEffect(()=> {
    // setPresentations()
    getPresentations(props.session) 
    // refreshFilesList(room)   
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
          <div className='' key={presentation.ID}>
            <h2>{presentation.Title}</h2>
            <h3>
            {Moment(presentation.StartTime).format("h:mmA") + " - " + Moment(presentation.EndTime).format("h:mmA")}
            </h3>
            <h2>{presentation.Presenter}</h2>
            {/* FileList will live below here, indexed by presentation.ID */}
            <h4>{presentation.ID}</h4>         
          </div>
        ))
        : "No presentations have been added to this session yet."}
       
        </div>
        <div>                              
      </div>

    </div>
  )
}

export default PresentationList