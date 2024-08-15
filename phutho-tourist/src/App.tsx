import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Documents from './pages/Documents';
import Recruitment from './pages/Recruitment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/recruitment" element={<Recruitment />} />
        </Routes>
        <Footer /> 
    </Router>
    </div>
  );
}

export default App;
