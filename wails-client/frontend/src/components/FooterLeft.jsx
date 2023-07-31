import React from 'react'
import Moment from 'moment'
function FooterLeft() {
  return (
    <div>
      
      <div>
        <button> previous </button>
        {Moment(Date.now()).format(" dddd  ")}
        <button>next</button>
      </div>
    </div>
  )
}

export default FooterLeft