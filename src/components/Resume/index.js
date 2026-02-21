import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCode, faUser } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <div className="container resume-page">
      <div className="content-container">
        <div className="header-section">
          <div className="title-text">
            <h1 className="page-title">Resume</h1>
            <p className="subtitle">ประวัติการศึกษาและทักษะทางด้านเทคนิค</p>
          </div>
          <a href="Resume.pdf" download className="download-btn">
            Download Resume
          </a>
        </div>

        <div className="resume-grid">
          <div className="column">
            {/* --- Education Section --- */}
            <section className="education">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faGraduationCap} /> Education
              </h2>
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3>Bachelor of Industrial Technology (B.Ind.Tech.)</h3>
                <span className="date">2025 - Present | GPA: 2.69</span>
                <p className="location">King Mongkut's University of Technology North Bangkok</p>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3>Diploma in Computer Technology</h3>
                <span className="date">2023 | GPA: 3.60</span>
                <p className="location">Samutsakorn Technical College</p>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3>Certificate in Vocational Education (Electronics)</h3>
                <span className="date">2021 | GPA: 3.30</span>
                <p className="location">Samutsakorn Technical College</p>
              </div>
            </section>

            {/* --- Soft Skills Section --- */}
            <section className="skills">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faUser} /> Soft Skills
              </h2>
              <ul className="skill-list">
                <li>Communication & Teamwork</li>
                <li>Interpersonal Skills</li>
                <li>Time Management</li>
                <li>Positive Attitude</li>
              </ul>
            </section>
          </div>

          <div className="column">
            {/* --- Experience Section --- */}
            <section className="experience">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faBriefcase} /> Internship Experience
              </h2>
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3>Synergic Technology Company Limited</h3>
                <span className="date">Internship</span>
                <ul>
                  <li>ตรวจสอบสินค้า (Notebooks, Printers, Computers) และนำเข้าข้อมูลสู่ระบบของบริษัท</li>
                  <li>ติดตั้งระบบคอมพิวเตอร์ ณ สำนักงานธนาคารในเครือ (SCB, ธนาคารกรุงศรีฯ)</li>
                  <li>บำรุงรักษาอุปกรณ์สำนักงาน เช่น เครื่องพิมพ์, เครื่องนับธนบัตร และคอมพิวเตอร์พกพา</li>
                </ul>
              </div>
            </section>

            {/* --- Technical Skills Section --- */}
            <section className="skills">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faCode} /> Technical Skills
              </h2>
              <div className="skill-bar">
                <div className="skill-info"><span>C / C++</span><span>85%</span></div>
                <div className="progress-line"><span style={{ width: '85%' }}></span></div>
              </div>
              <div className="skill-bar">
                <div className="skill-info"><span>HTML & SQL</span><span>75%</span></div>
                <div className="progress-line"><span style={{ width: '75%' }}></span></div>
              </div>
              <div className="skill-bar">
                <div className="skill-info"><span>Linux (Ubuntu/Raspbian)</span><span>80%</span></div>
                <div className="progress-line"><span style={{ width: '80%' }}></span></div>
              </div>
              <div className="skill-bar">
                <div className="skill-info"><span>VS Code & Network</span><span>70%</span></div>
                <div className="progress-line"><span style={{ width: '70%' }}></span></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;