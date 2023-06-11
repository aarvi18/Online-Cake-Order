import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Our_Products from './components/Pages/Our_Products';
import About_Us from './components/Pages/About_Us';
import Navbar from './components/Navbar';


const Base = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Our_Products" element={<Our_Products />} />
          <Route exact path="About_Us" element={<About_Us />} />
        </Routes>
    </Router>
  )
}

export default Base;