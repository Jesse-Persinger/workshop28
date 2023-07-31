import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';
function App() {

  return (
    <>
      <div id="container">
        <div id='navbar'>
          <Link to={'/red'}>RED</Link >
          <Link to={'/'}>VS</Link>
          <Link to={'/blue'}>BLUE</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path='/' element={Home()}></Route>
            <Route path='/blue' element={Blue()}></Route>
            <Route path='/red' element={Red()}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
