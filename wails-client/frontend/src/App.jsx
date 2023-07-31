import {useState} from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './layout/Home';
import MyPC from './layout/MyPC';
import HowTo from './layout/HowTo';
import HelpUser from './layout/HelpUser';
import RefreshFiles from './layout/RefreshFiles';

function App() { 

    return (
        <div className="clientWrapper"> 
        <div>
            <Header/>
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
                <Footer/>
            </div>
        </div>
    )
}

export default App
