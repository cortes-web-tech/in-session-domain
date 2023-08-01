import {React, useState, useEffect} from 'react'
import Moment from 'moment'
import { Link, useLocation } from 'react-router-dom'
import { RoomList } from '../../wailsjs/go/main/App'
function Header() {
const path = useLocation().pathname
const [rooms, setRooms] = useState([])
useEffect(()=>{
    getRooms()
}, [])
const updateRooms = (result) => setRooms(result)
function getRooms(){
    RoomList().then(updateRooms)
}
  return (
    <div className='header'>
        <div className='flex-content'>
            {path == "/" ? "" :<Link to="/"><h3>Home</h3></Link>}            
        </div>
        <div className='flex-content'>
            <h3>{Moment(Date.now()).format("MM/DD/YY h:mmA")}</h3>
        </div>
        <div className='flex-content'>
            <div  className='room-nav'>
                <div>
                Room:
                </div>
            <select>
                {rooms.map((room) =>(
                    <option href="#">{room.Name}</option>                    
                ))}                
            </select>
            </div>
        </div>
    </div>
  )
}

export default Header