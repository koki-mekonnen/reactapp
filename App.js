import React from 'react'
import { useState } from 'react';
import "./index.css";
import "./App.css";

import {  Route, Routes } from "react-router-dom";
import { team } from './componenets/Data'

import Navbar from './componenets/Navbar';
import Home from "./componenets/Home"
import About from "./componenets/About"
import Allcourses from './componenets/Allcourses';
import Contact from "./componenets/Contact"
import Team from './componenets/Team';



function App() {
  return (
    <div className="App">
    <div className="name">
      <div>
      <h1>BRIGHT</h1>
      <span>ONLINE EDUCATION AND LEARNING</span>
      </div>
      <div className='icons'>
      <div  className='icons'><i className="bi bi-facebook "></i></div>
      <div className='icons'> <i className="bi bi-instagram"></i></div>
      <div   className='icons'><i className="bi bi-twitter"></i></div>
      <div  className='icons'><i className="bi bi-youtube"></i></div>
    </div>
    </div>
      < Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route  path="/allcourses" element={<Allcourses/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      
    </Routes>
    
    </div>
  );
}

export default App;
