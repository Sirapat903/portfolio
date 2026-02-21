import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faCode, faLayerGroup, faBolt } from '@fortawesome/free-solid-svg-icons';
import profileImg from './assets/profile1.jpg'; 

const Home = () => {
  return (
    <section className="hero-section">
      <div className="container hero-page">
        <div className="content-wrapper">
          
          {/* ฝั่งซ้าย: เนื้อหา */}
          <div className="text-zone">
            <h1 className="animate-title">
              Hello, I'm <br />
              <span className="highlight">สิรภัทร บุญประเสริฐ</span>
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
              <a href="https://github.com/Sirapat903/"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faDribbble} /></a>
            </div>
          </div>

          {/* ฝั่งขวา: รูปภาพ (เน้นการปรับขนาดและเอฟเฟกต์) */}
          <div className="image-zone">
            <div className="image-container">
              <div className="image-bg-blob"></div> {/* วงกลมพื้นหลัง */}
              <img src={profileImg} alt="Siraphat" className="profile-img" />
              
              {/* Floating Tags - ช่วยให้ดูเป็นมืออาชีพขึ้น */}
              <div className="floating-tag tag-1">
                <FontAwesomeIcon icon={faCode} /> <span>Dev</span>
              </div>
              <div className="floating-tag tag-2">
                <FontAwesomeIcon icon={faLayerGroup} /> <span>UI/UX</span>
              </div>
               <div className="floating-tag tag-3">
                <FontAwesomeIcon icon={faBolt} /> <span>Performance</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;