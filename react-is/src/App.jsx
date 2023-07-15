import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
// import './App.css'
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
    <>
      
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="User" element={<User />} />
        <Route path="Users" element={<Users />} />
        <Route path="Session" element={<Session />} />
        <Route path="Sessions" element={<Sessions />}/>
        <Route path="Dashboard" element={<Dashboard />} />    
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
