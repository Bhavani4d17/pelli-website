import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Forgot from './pages/Forgot'
import Main from './pages/Main'

export default function App(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/forgot' element={<Forgot/>} />
        <Route path='/main' element={<Main/>} />
      </Routes>
    </div>
  )
}
