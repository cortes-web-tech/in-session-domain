import React, { useContext, useState, useEffect } from 'react'
import {useLocation } from 'react-router-dom'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import '../App.css'
import { HeaderContext } from './context/HeaderContext'


function Footer() {
  const path = useLocation().pathname
  const room = useContext(HeaderContext)
  const [sessions, setSessions] = useState();
  useEffect(()=>{

  }, [])
  return (
    <div className='footer'>
      <div className='flex-content'>
    
      {path == "/" ? <FooterLeft/> :""}
      
      </div>
      <div className='flex-content'>
        Event / Sponsor ™️   
      </div>
      <div className='flex-content'>
      <FooterRight/>
      </div>
    </div>
  )
}

export default Footer