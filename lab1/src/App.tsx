import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import './App.css'; 
const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/add-user" className="nav-link">Add User</Link>
          </li>
          <li className="nav-item">
            <Link to="/list-user" className="nav-link">List User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/list-user" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default App;
