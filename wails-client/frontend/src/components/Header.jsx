import React from 'react'
import Moment from 'moment'
import { Link, useLocation } from 'react-router-dom'
function Header() {
    const path = useLocation().pathname
  return (
    <div className='header'>
        <div className='flex-content'>
            {path == "/" ? "" :<Link to="/">Home</Link>}
            
        </div>
        <div className='flex-content'>
            {Moment(Date.now()).format("MM/DD/YY h:mmA")}
        </div>
        <div className='flex-content'>
            Room TBD
        </div>
    </div>
  )
}

export default Header