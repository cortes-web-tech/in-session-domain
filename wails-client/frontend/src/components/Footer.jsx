import React, { useContext, useState, useEffect } from 'react'
import {useLocation } from 'react-router-dom'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import '../App.css'
function Footer({onDataFromChild}) {  
  const [presentation, setPresentation] = useState()  
  const path = useLocation().pathname
  useEffect(()=>{
    // sendToParent(presentation)
  },[])
  // console.log(presentation)
  onDataFromChild={presentation}
  return (
    <div className='footer'>      
      <div className='flex-content'>    
      {path == "/" ?<FooterLeft onDataFromChild={setPresentation} /> : ""}
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