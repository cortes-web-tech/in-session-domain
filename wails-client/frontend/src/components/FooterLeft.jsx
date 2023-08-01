import {React, useState, useEffect} from 'react'
import Moment from 'moment'
import { GetDay } from '../../wailsjs/go/main/App'
function FooterLeft() {
  useEffect(()=>{
    // getDay()
  })
  const [day, setDay] = useState([])
  const updateDay = (result) =>setDay(result)
  console.log(day)
  function getDay(){
    GetDay().then(updateDay)
  }
  return (
    <div>
      
      <div>
        <button> previous </button>
        {Moment(Date.now()).format(" dddd  ")}
        <button>next</button>
      </div>
    </div>
  )
}

export default FooterLeft