import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Range from './components/Range'
import Offer from './components/Offer'
import Future from './components/Future'
import Price from './components/Price'
import { Routes,Route } from 'react-router-dom'
import Tech_Team from './Pages/Tech_Team'

const App = () => {
  return (
    <>
    <Header/>
    
    <Routes>
      <Route path="/tech-team" element={<Tech_Team />} />
    </Routes>
    
     
    </>
  )
}

export default App
