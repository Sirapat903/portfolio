import React from 'react';
import { NavLink } from 'react-router-dom'; // ลบ Route, Routes ออกจากที่นี่เพราะไม่ได้ใช้ใน Sidebar
import './index.scss';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        {/* ใช้ <a> พร้อม href ที่ตรงกับ id ใน App.js */}
        <a href="#home" >HOME</a>
        <a href="#about" >ABOUT</a>
        <a href="#resume">RESUME</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </div>
  );
};

export default Sidebar;