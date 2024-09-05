import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 
import logo from '../assets/logo.svg'; 
import Banner from './Banner';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('/');

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link 
              to="/" 
              className={activeLink === '/' ? styles.activeMenu : ''} 
              onClick={() => handleLinkClick('/')}
            >
              Trang Chủ
            </Link>
          </li>
          <li>
            <Link 
              to="/posts" 
              className={activeLink === '/posts' ? styles.activeMenu : ''} 
              onClick={() => handleLinkClick('/posts')}
            >
              Bài Viết
            </Link>
          </li>
          <li>
            <img src={logo} alt="logo-phutho-tourist" />
          </li>
          <li>
            <Link 
              to="/documents" 
              className={activeLink === '/documents' ? styles.activeMenu : ''} 
              onClick={() => handleLinkClick('/documents')}
            >
              Tài Liệu
            </Link>
          </li>
          <li>
            <Link 
              to="/recruitment" 
              className={activeLink === '/recruitment' ? styles.activeMenu : ''} 
              onClick={() => handleLinkClick('/recruitment')}
            >
              Tuyển Dụng
            </Link>
          </li>
        </ul>
      </nav>
      <Banner />
    </>
  );
};

export default Navbar;
