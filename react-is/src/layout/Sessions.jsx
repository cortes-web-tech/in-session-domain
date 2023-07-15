import React from 'react'

import SessionList from '../components/SessionList';
function Sessions() {
  return <div className="pageLayout">
  
  <div className="content">  
    <h1>Sessions</h1>
    <SessionList/>
  </div>
  
</div>;
}

export default Sessions