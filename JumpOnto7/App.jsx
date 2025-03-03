import { useState } from 'react'

import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { dashboard } from './Components/dashboard'
import { landing } from './Components/landing'

function App() {


  return (
    <div>

       <div style={{background: "black", color: "white"}}>
        Hi this is the topbar

       </div>
    
    <BrowserRouter>
    <Routes>
      <Route  path="/dashboard" element={<dashboard/> }/>
      <Route  path="/" element={<landing/> }/>
    </Routes>
     
    </BrowserRouter>
    </div>
  )
}

export default App
