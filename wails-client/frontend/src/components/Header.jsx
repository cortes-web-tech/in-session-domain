import React from 'react'
import Moment from 'moment'
import { Link, useLocation } from 'react-router-dom'
function Header() {
    const path = useLocation().pathname
  return (
    <div className='header'>
        <div className='flex-content'>
            {path == "/" ? "" :<Link to="/"><h3>Home</h3></Link>}
            
        </div>
        <div className='flex-content'>
            <h3>{Moment(Date.now()).format("MM/DD/YY h:mmA")}</h3>
        </div>
        <div className='flex-content'>
            <h3>Room TBD</h3>
        </div>
    </div>
  )
}

export default Header