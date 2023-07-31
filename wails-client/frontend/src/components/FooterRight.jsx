import React from 'react'
import { Link } from 'react-router-dom'
function FooterRight() {
  return (
    <div className='rightFooter'>
      <Link className='flex-content' to="/RefreshFiles">Refresh Files</Link>
      <Link className='flex-content' to="/MyPC">My PC</Link>
      <Link className='flex-content' to="/HelpUser">Help</Link>
      <Link className='flex-content' to="/Howto">How To</Link>
    </div>
  )
}

export default FooterRight