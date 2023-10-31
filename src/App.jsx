// Import React's useState hook for managing state in functional components
import { useState } from 'react';

// Import images for React and Vite logos
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// Import external styles for the App component
import './App.css';

// Import necessary components and pages for routing
import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';

// Import custom components for routing
import Vite from './components/Vite';
import React from './components/React';
import Parent from './components/Parent';
import Profile from './components/Profile';
import Store from './components/Store';

// Main functional component representing the App
function App() {
  // Initialize the navigate function from react-router-dom for navigating between pages
  const navigate = useNavigate();

  // JSX code representing the layout of the application
  return (
    <>
      {/* Navigation bar with links to different pages */}
      <nav>
        <ul>
          {/* NavLink components for different routes with dynamic styling based on active route */}
          <li>
            <NavLink 
              to="/"
              // Inline style for NavLink, changes color and background based on active state
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

      {/* Button for navigating back one page */}
      <button onClick={()=>{navigate(-1)}}>Take me back 1 page</button>
      {/* Button for navigating back to the home page */}
      <button onClick={()=>{navigate('/')}}>Take me home</button>
      <br/>

      {/* React Router DOM Routes for handling different paths and rendering components */}
      <Routes>
        {/* Default route, displays "Hello, welcome!" when no specific path matches */}
        <Route path="" element={<>Hello, welcome!</>} />
        
        {/* Route for the Parent component */}
        <Route path="parent" element={<Parent/>}/>

        {/* Route for the Profile component with dynamic userId parameter */}
        <Route path="/profile/:userId" element={<Profile/>}/>

        {/* Route for the Store component with dynamic productId parameter */}
        <Route path="/store/:productId" element={<Store/>}/>

        {/* Route for the React component */}
        <Route path="/react" element={<React/>} />

        {/* Route for the Vite component */}
        <Route path="/vite" element={<Vite/>} />
      </Routes>
    </>
  );
}

// Export the App component as the default export of this module
export default App;
