import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import '../App.css'


function Footer() {
  const path = useLocation().pathname
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