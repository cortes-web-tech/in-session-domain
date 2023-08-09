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
      <div className='presentations'>
        {presentations.length > 0 ?
        presentations.map((presentation,key)=>(
          <div className='' key={presentation.ID}>
            <h2>{presentation.Title}</h2>
            <h3>
            {Moment(presentation.StartTime).format("h:mmA") + " - " + Moment(presentation.EndTime).format("h:mmA")}
            </h3>
            <h2>{presentation.Presenter}</h2>
            <FileList id={presentation.ID}/>
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