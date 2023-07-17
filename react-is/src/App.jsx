import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './layout/Home'
import User from './layout/User'
import Users from './layout/Users'
import Session from './layout/Session'
import Sessions from './layout/Sessions'
import Dashboard from './layout/Dashboard'
import Nav from './components/Nav'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container flex flex-col mx-auto min-h-screen min-w-fit items-center text-white'>
      
      <div className="min-w-full bg-blue-800"><Nav /></div>
      <div className='flex-grow min-w-full text-center'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="User" element={<User />} />
        <Route path="Users" element={<Users />} />
        <Route path="Session" element={<Session />} />
        <Route path="Sessions" element={<Sessions />}/>
        <Route path="Dashboard" element={<Dashboard />} />    
      </Routes>
      </div>
      <div className="bg-blue-800 bot-0 px-3 min-w-full text-center"><Footer /></div>
      
      
    </div>
  )
}

export default App
