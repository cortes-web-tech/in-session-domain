import {React, useState, useEffect} from 'react'
import Moment from 'moment'
import { Link, useLocation } from 'react-router-dom'
import { RoomList, GetSessions} from '../../wailsjs/go/main/App'
function Header() {
const path = useLocation().pathname
const [rooms, setRooms] = useState([])
const [sessions, setSessions] = useState([])
const [room, setRoom] = useState('Sector 9 HQ')
useEffect(()=>{
    getRooms()
    // getSessions()
}, [])
console.log(sessions)

const updateRooms = (result) => setRooms(result)
function getRooms(){
    RoomList().then(updateRooms)
}

const handleChange = (e) => {
    setRoom(e.target.value)
    getSessions(e.target.value)
}

const updateSessions = (result) => setSessions(result)
function getSessions(room){
    GetSessions(room).then(updateSessions)
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
            <select onChange={handleChange}>
                {rooms.map((room, key) =>(
                    <option href="#" key={room.ID} value={room.Name} >{room.Name}</option>                    
                ))}                
            </select>
            <submit></submit>
            </div>
        </div>
    </div>
  )
}

export default Header