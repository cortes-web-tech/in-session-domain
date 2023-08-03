import React, { useContext, useState, useEffect } from 'react'
import {useLocation } from 'react-router-dom'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import '../App.css'
import { SessionContext } from './context/SessionContext';
function Footer() {  
  const path = useLocation().pathname
  const [presentation, setPresentation] = useState(1)  
  return (
    <div className='footer'>      
      <div className='flex-content'>    
      {path == "/" ?<FooterLeft onDataFromChild={setPresentation}/> : ""}
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