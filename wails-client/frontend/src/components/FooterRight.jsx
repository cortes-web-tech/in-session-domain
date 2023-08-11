import React from 'react'
import { Link } from 'react-router-dom'
import { OpenMyPC } from '../../wailsjs/go/main/App'
import { useLocation } from 'react-router-dom'
function FooterRight() {
  const path = useLocation().pathname  
  return (
    <div >
      {
      path == "/HelpUser" ?
      <div></div>
      :
      <div className='rightFooter'>
        <button onClick={OpenMyPC}>Desktop</button>
        {path == "/RefreshFiles" ? <div className='flex-content'></div> :<Link className='flex-content' to="/RefreshFiles">Refresh Files</Link>}
        {path == "/HelpUser" ? <div className='flex-content'></div> :<Link className='flex-content' to="/HelpUser">Help</Link>}
        {path == "/HowTo" ? <div className='flex-content'></div> :<Link className='flex-content' to="/HowTo">How To</Link>}      
      </div>
      }      
    </div>
  )
}

export default FooterRight