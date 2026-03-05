import React from 'react';
import './Resume.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase,  faUser , faDownload} from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <div className="container resume-page">
      <div className="content-container">
        <div className="header-section">
          <div className="title-text">
            <h1 className="page-title">Resume</h1>
            <p className="subtitle">Educational background and technical skills.</p>
          </div>
          <div className="button-group">
            <a href="Resume.pdf" download className="download-btn">
              <FontAwesomeIcon icon={faDownload} /> Download Resume 
            </a>
            <a href="Transcript.pdf" download className="download-btn thai-version">
              <FontAwesomeIcon icon={faDownload} /> Download Transcript
            </a>
          </div>
          
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
                  <li>Inspect products (notebooks, printers,computers) and import them into the company's system.</li>
                  <li>Install computer systems at affiliated bank offices (Siam Commercial Bank,Bank of Ayudhya).</li>
                  <li>Maintain equipment in various bank offices (printers, banknote counters,notebooks, computers).</li>
                </ul>
              </div>
            </section>

            {/* --- Technical Skills Section --- */}
            <section className="skills">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faUser} /> Soft Skills
              </h2>
              <div className="skill-bar">
                <div className="skill-info"><span>Communication & Teamwork</span><span>85%</span></div>
                <div className="progress-line"><span style={{ width: '85%' }}></span></div>
              </div>
              <div className="skill-bar">
                <div className="skill-info"><span>Interpersonal Skills</span><span>75%</span></div>
                <div className="progress-line"><span style={{ width: '75%' }}></span></div>
              </div>
              <div className="skill-bar">
                <div className="skill-info"><span>Time Management</span><span>80%</span></div>
                <div className="progress-line"><span style={{ width: '80%' }}></span></div>
              </div>
              <div className="skill-bar">
                <div className="skill-info"><span>Positive Attitude</span><span>85%</span></div>
                <div className="progress-line"><span style={{ width: '85%' }}></span></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;