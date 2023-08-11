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
        <div className='desktopButton'>
          <button onClick={OpenMyPC}>Desktop</button>
        </div>
        {path == "/RefreshFiles" ? <div className='flex-content'></div> :<div className='desktopButton'><button><Link  to="/RefreshFiles">Refresh </Link></button></div>}
        {path == "/HelpUser" ? <div className='flex-content'></div> :<div className='desktopButton'><button><Link to="/HelpUser">Help</Link></button></div>}
        {path == "/HowTo" ? <div className='flex-content'></div> :<div className='desktopButton'><button><Link to="/HowTo">How To</Link></button></div>}      
      </div>
      }      
    </div>
  )
}

export default FooterRight