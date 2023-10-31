import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom'

// IMPORT COMPONENTS ANG PAGES
import Vite from './components/Vite'
import React from './components/React'
import Parent from './components/Parent'
import Profile from './components/Profile'
import Store from './components/Store'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/"
              style={({ isActive }) => ({ 
                color: isActive ? "green" : "red",
                backgroundColor: isActive ? "#32ffc3" : "white"
                 })}
            >
              Home
            </NavLink> 
          </li>
          <li>
            <NavLink 
              to="/react"
              style={({ isActive }) => ({ 
                color: isActive ? "green" : "red",
                backgroundColor: isActive ? "#32ffc3" : "white" 
                })}
            >
              React
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/vite"
              style={({ isActive }) => ({ 
                color: isActive ? "green" : "red",
                backgroundColor: isActive ? "#32ffc3" : "white" 
                })}
            >
              Vite
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/parent"
              style={({ isActive }) => ({ 
                color: isActive ? "green" : "red",
                backgroundColor: isActive ? "#32ffc3" : "white" 
                })}
            >
              Parent
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile/1"
              style={({ isActive }) => ({ 
                color: isActive ? "green" : "red",
                backgroundColor: isActive ? "#32ffc3" : "white" 
                })}
            >
              Profile 1
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile/2"
              style={({ isActive }) => ({ 
                color: isActive ? "green" : "red",
                backgroundColor: isActive ? "#32ffc3" : "white" 
                })}
            >
              Profile 2
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/store/1"
              style={({ isActive }) => ({ 
                color: isActive ? "green" : "red",
                backgroundColor: isActive ? "#32ffc3" : "white" 
                })}
            >
              Store 1
            </NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={()=>{navigate(-1)}}>Take me back 1 page</button>
      <button onClick={()=>{navigate('/')}}>Take me home</button>
      <br/>
      <Routes>
        <Route path="" element={<>Hello, welcome!</>} />
        <Route path="parent" element={<Parent/>}/>
        <Route path="/profile/:userId" element={<Profile/>}/>
        <Route path="/store/:productId" element={<Store/>}/>
        <Route path="/react" element={<React/>} />
        <Route path="/vite" element={<Vite/>} />
      </Routes>
    </>
  )
}

export default App
