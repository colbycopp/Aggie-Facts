import './App.css';
import Nav from './components/Navbar';
import Home from './components/pages/Home';
import TAMULore from './components/pages/TAMU-Lore';
import CybersecurityCenter from './components/pages/Cybersecurity-Center';
import CybersecurityClub from './components/pages/Cybersecurity-Club';
import Footer from './components/Footer'
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav className='navbar'/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/tamu-lore" element={<TAMULore />}/>
          <Route path="/cybersecurity-center" element={<CybersecurityCenter />}/>
          <Route path="/cybersecurity-club" element={<CybersecurityClub />}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
   
  );
}

export default App;

