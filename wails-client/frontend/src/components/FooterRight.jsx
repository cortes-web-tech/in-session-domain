import React from 'react'
import { Link } from 'react-router-dom'
import { OpenMyPC } from '../../wailsjs/go/main/App'

function FooterRight() {
  return (
    <div className='rightFooter'>
      <Link className='flex-content' to="/RefreshFiles">Refresh Files</Link>
      <button onClick={OpenMyPC}>Desktop</button>
      <Link className='flex-content' to="/HelpUser">Help</Link>
      <Link className='flex-content' to="/Howto">How To</Link>
    </div>
  )
}

export default FooterRight