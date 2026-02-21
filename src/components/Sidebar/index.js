import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        {/* ปุ่มไปหน้า About (หน้าหลัก) */}
         <NavLink exact="true" activeclassname="active" to="/">
          <span>HOME</span>
        </NavLink>

         <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
          <span>RESUME</span>
        </NavLink>

        {/* ปุ่มไปหน้า Experience */}
        <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience">
          <span>EXPERIENCE</span>
        </NavLink>

        {/* ปุ่มไปหน้า Contact (ถ้าพัทสร้างไว้แล้ว) */}
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <span>CONTACT</span>
        </NavLink>

       
      </nav>
    </div>
  );
};

export default Sidebar;