import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbaar from './Components/Navbaar'

function App() {
 

  return (

  <BrowserRouter>
<div className='mb-[70px]'>
<Navbaar />
</div>
<Routes>
  <Route path='/'  element = {<Home />}/>
</Routes>
  
  </BrowserRouter>
  )
}

export default App

