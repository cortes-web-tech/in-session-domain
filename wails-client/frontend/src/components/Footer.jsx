import React from 'react'
import { Link } from 'react-router-dom'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import '../App.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='flex-content'>
      <FooterLeft/>
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