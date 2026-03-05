import React from 'react'
import './Experience.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCheckCircle, faUniversity } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
  return (
    <div className="container experience-page">
      <div className="content-container">
        <div className="header-section">
          <h1 className="page-title">Experience</h1>
          <p className="subtitle">My professional journey and internship highlights.</p>
        </div>

        <div className="timeline">
          {/* ข้อมูลการฝึกงานที่ Synergic Technology */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className="timeline-content">
              <span className="date">February 2023 - 2024 </span>
              <h2>Internship Experience</h2>
              <h3 className="company">SYNERGIC TECHNOLOGY COMPANY LIMITED</h3>
              
              <p className="job-desc">
                Inspect products (notebooks, printers, computers) and import them into the company's system.
              </p>

              <div className="highlight-projects">
                <h3><FontAwesomeIcon icon={faCheckCircle} /> Key Projects & Responsibilities:</h3>
                <ul>
                  <li>
                    <div className="project-title">Bank System Installation</div>
                    <p>Install computer systems at affiliated bank offices (Siam Commercial Bank, Bank of Ayudhya).</p>
                  </li>
                  <li>
                    <div className="project-title">Equipment Maintenance</div>
                    <p>Maintain equipment in various bank offices (printers, banknote counters, notebooks, computers).</p>
                  </li>
                </ul>
              </div>

             
            </div>
          </div>

          {/* คุณพัทสามารถเพิ่มหัวข้อการศึกษาหรือโปรเจกต์เด่นๆ ที่นี่ได้อีก */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FontAwesomeIcon icon={faUniversity} />
            </div>
            <div className="timeline-content">
              <span className="date">2025 - Present</span>
              <h2>Bachelor of Industrial Technology</h2>
              <h3 className="company">KMUTNB</h3>
              <p>Studying Electronic Technology at King Mongkut's University of Technology North Bangkok.</p>
              <span className="date">2023 - 2025</span>
              <h2>Diploma in Computer Technology</h2>
              <h3 className="company">Samutsakorn Technical College</h3>
              <p>Studying Computer Technology at Samutsakorn Technical College.</p>
              <span className="date">2021 - 2023</span>
              <h2>Certificate in Vocational Education (Electronics)</h2>
              <h3 className="company">Samutsakorn Technical College</h3>
              <p>Studying Electronic Technology at Samutsakorn Technical College.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;