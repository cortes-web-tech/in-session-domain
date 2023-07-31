import React from 'react'
import { OpenFileOnClick } from '../../wailsjs/go/main/App'
function Presentations() {
  return (
    <div>
      presentation list
      <div>
        <h2>title</h2>
        <h4>time</h4>
        <h3>presenter</h3>
        <button onClick={OpenFileOnClick}>open File</button>
      </div>

    </div>
  )
}

export default Presentations