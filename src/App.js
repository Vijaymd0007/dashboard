import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/dashboard/Dashboard'
import Profile from './components/Profile'

const App = () => {
  return (
    <>

    <BrowserRouter>
  <Routes>

  
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/profile' element={<Profile/>}/>
  
    </Routes>
    
    </BrowserRouter>
    
    
    </>
  )
}

export default App