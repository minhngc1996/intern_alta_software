import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Documents from './pages/Documents';
import Recruitment from './pages/Recruitment';
import Footer from './components/Footer';
import Introduce from './components/ContentHomePage/AboutUs/Introduce';

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
          <Route path="/gioi-thieu" element={<Introduce />} /> {/* Add route for /gioi-thieu */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
