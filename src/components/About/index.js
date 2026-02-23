import React from 'react';
import './index1.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faCode, faLayerGroup, faBolt } from '@fortawesome/free-solid-svg-icons';
import profileImg from './assets/profile1.jpg'; 

const About = () => {
  return (
    <section className="dark-hero-section">
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
              <strong>I am a Bachelor of Industrial Technology student</strong> in Electronic 
              Technology at <strong>KMUTNB</strong>. My academic focus bridges the gap between electronics and computer engineering, 
              fueled by a deep passion for <strong>software development</strong>. I have hands-on experience with <strong>Python, Java, JavaScript</strong>, 
              and a strong specialization in <strong>C/C++ and Linux</strong>. I thrive on building innovative projects and am always eager to 
              master new technologies to create the best possible digital solutions.
            </p>

            <div className="btn-group">
              <a href="#resume" className="btn-primary">View My Resume</a>
              <a href="#contact" className="btn-outline">Get In Touch</a>
            </div>
            <div className="social-icons">
              <a href="https://github.com/Sirapat903/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faDribbble} /></a>
            </div>
          </div>

          {/* ฝั่งขวา: รูปภาพพร้อมเอฟเฟกต์สีเข้ม */}
          <div className="image-zone">
            <div className="image-container">
              <div className="image-bg-glow"></div> {/* แสงฟุ้งด้านหลังรูป */}
              <img src={profileImg} alt="Siraphat" className="profile-img" />
              
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

export default About;