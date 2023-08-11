import {React, useState, useEffect} from 'react'
import { GetPresentations} from '../../wailsjs/go/main/App'
import Moment from 'moment'
import FileList from './FileList';
function PresentationList(props) {
  const [presentations, setPresentations] = useState([]);  
  useEffect(()=> {
    getPresentations(props.session)
  },[props.session])

  const updatePresentations = (result) =>setPresentations(result)
  function getPresentations(props){
    GetPresentations(props).then(updatePresentations)
  }
  return(
    <div>
      <div>
        {presentations.length > 0 ?
        presentations.map((presentation,key)=>(
          <div className='refreshPresentations' key={presentation.ID}>
            <div className='presentationList'>
              <div className='refreshPresentationInfo'>
            <h2>Presentation:
              <br/>
              {presentation.Title}
            <br/>Presenter: {presentation.Presenter}</h2>
            <h4>
            Start time: {Moment(presentation.StartTime).format("h:mmA")}
            <br/>
            End time: {Moment(presentation.EndTime).format("h:mmA")}</h4>
            </div>
            
            
            </div >
            <div className='fileList'>
            <FileList  id={presentation.ID}/>
            </div>
          </div>
        ))
        : <h4>No presentations have been added to this session yet.</h4>}
        </div>
        <div>
      </div>
    </div>
  )
}
export default PresentationList