import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush, faCode, faLightbulb } from '@fortawesome/free-solid-svg-icons';
// อย่าลืม import รูปภาพของคุณมาใช้แทน profileImg
import profileImg from './assets/profile.jpg'; 

const Home = () => {
  return (
    <div className="container hero-page">
      <div className="content-wrapper">
        {/* ฝั่งซ้าย: ข้อความและปุ่ม */}
        <div className="text-zone">
          <h1 className="animate__animated animate__fadeInLeft">
            Hello, I'm <span className="highlight">สิรภทร บุญประเสริฐ</span>
          </h1>
          <p className="job-title">Creative UI/UX | Developer</p>
          <p className="description">
             ผมชื่อภัทร กำลังศึกษา ปริญญาตรีสาขาเทคโนโลยีอุตสาหกรรม (KMUTNB) 
             มีความเชี่ยวชาญด้าน C/C++, Linux และการพัฒนาเว็บด้วย React 
             พร้อมเรียนรู้เทคโนโลยีใหม่ๆ เพื่อสร้างสรรค์ผลงานที่ดีที่สุด
          </p>

          <div className="btn-group">
            <a href="#work" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>

          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faDribbble} /></a>
          </div>
        </div>

        {/* ฝั่งขวา: รูปภาพและ Floating Tags */}
        <div className="image-zone">
          <div className="image-box">
            <img src={profileImg} alt="Siraphat" />
    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;