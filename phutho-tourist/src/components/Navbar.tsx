import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 
import logo from '../assets/logo.svg'; 
import Banner from './Banner';
const Navbar: React.FC = () => {
  return (
    <>
      <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">Trang Chủ</Link></li>
        <li><Link to="/posts">Bài Viết</Link></li>
        <li><img src={logo} alt="logo-phutho-tourist" /></li>
        <li><Link to="/documents">Tài Liệu</Link></li>
        <li><Link to="/recruitment">Tuyển Dụng</Link></li>
      </ul>
    </nav>
    <Banner />
    </>
  );
};

export default Navbar;
