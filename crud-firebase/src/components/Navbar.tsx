import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">HR Management</h1>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-user">Add User</Link></li>
        <li><Link to="/list-user">List Users</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
