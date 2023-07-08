import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './layout/Home'
import Users from './layout/Users'
import Sessions from './layout/Sessions'
import Dashboard from './layout/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Users" element={<Users />} />
        <Route path="Sessions" element={<Sessions />}/>
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
