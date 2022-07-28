import React, { Component } from 'react';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Portfolio from '../components/pages/Portfolio';
import Show from '../components/Portfolio/Show';
import {
    BrowserRouter as Router,
    Routes ,
    Route,
    Link
  } from "react-router-dom";

function Web() {
    return ( 
        <div>
        <Routes >
            <Route path='/about' element={<About/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/portfolio/:slug.:id' element={<Show/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes >
    
    </div>
     );
}

export default Web;
