import {useEffect, useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './layout/Home';
import MyPC from './layout/MyPC';
import HowTo from './layout/HowTo';
import HelpUser from './layout/HelpUser';
import RefreshFiles from './layout/RefreshFiles';
import { HeaderContext } from './components/context/HeaderContext';
import { SessionContext } from './components/context/SessionContext';
function App({passToParent}) { 
const [room, setRoom] = useState('Nerv HQ')
const [presentation, setPresentation] = useState(0)
useEffect(()=>{
}, [room])

return (
<div className='app'>
    <div className='app h-screen'>
    <div className='app-grid'>
        <HeaderContext.Provider value={room}>            
        <SessionContext.Provider value={presentation}>
        <div className='headerWrapper'>            
            <Header onDataFromChild={setRoom}/>            
        </div>
        <div className='contentWrapper'>
            
            <Routes>            
                <Route path="/" element={<Home/>}/>                
                <Route path="/MyPC" element={<MyPC/>}/>
                <Route path="/HowTo" element={<HowTo/>}/>
                <Route path="/HelpUser" element={<HelpUser/>}/>
                <Route path="/RefreshFiles" element={<RefreshFiles/>}/>
            </Routes>
            
        </div>
        <div className='footerWrapper'>
            <Footer passToParent={setPresentation}/>
        </div>   
        </SessionContext.Provider>
        </HeaderContext.Provider>
    </div>
    </div>
</div>    
)
}

export default App
