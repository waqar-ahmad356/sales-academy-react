import React from 'react'
import Header from './components/Header'

import { Routes,Route } from 'react-router-dom'
import Tech_Team from './Pages/Tech_Team'

const App = () => {
  return (
    <>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Tech_Team />} />
    </Routes>
    
     
    </>
  )
}

export default App
