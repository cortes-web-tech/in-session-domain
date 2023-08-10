
import { useContext, React, useState } from 'react'
import { HeaderContext } from '../components/context/HeaderContext'
function HelpUser() {
  const room = useContext(HeaderContext)    
  // const [userTextInput, setUserTextInput] = useState('Type something in here to ask for help')
  return (
    <div className='chatboxWrapper'>
      <div className='chatbox'>      
      <h2>{room} Help Chat</h2>
        <div className='chatboxText'>        
        
          <h2>[6:35:23] - [{room}] Tech: Hey we're missing a file<br/>          
          [6:36:05] - [Support] Operator: For which presenter?<br/>
          [6:37:22] - [{room}] Tech: Kakashi Sensei<br/>
          [6:38:18] - [Support] Operator: Standby, we're checking<br/>
          [6:38:22] - [{room}] Tech: Thank you<br/>
          [6:39:38] - [Support] Operator: He never uploaded a file. Did he email it by any chance?<br/>
          [6:40:22] - [{room}] Tech: Yes, he emailed it to Guy Sensei<br/>
          [6:40:48] - [Support] Operator: Oh. Does he have it on a USB drive?<br/>
          [6:41:22] - [{room}] Tech: Yes, can we use that instead?<br/>
          [6:42:48] - [Support] Operator: Yup! Click on the desktop icon and you'll access the file viewer menu, with the desktop as the source. Then select your USB drive, the file, and open it from there.<br/>
          [6:43:22] - [{room}] Tech: Okay, we'll do that instead
          </h2>
        </div>
      </div>     
     
      <div className='userChat'>
        <div className='userChatName'>
          <div className='chatIdentifier'>
          <h4>[ {room} ] - [ Tech ]</h4> 
          </div>
          </div>
        <div className='userChatInput'>
          <div className='helpUserText'>
          <h4>Type something in here to ask for help</h4>
          </div>
        </div>
        <div className='sendHelpText'>
          <button className='sendHelpButton'>Send</button>
        </div>
      </div>       
    </div>
  )
}

export default HelpUser