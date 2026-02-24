import React from 'react';
import './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faJsSquare, faReact, faPython, faNodeJs, faGithub, faJava, faPhp, faLaravel
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode, faDatabase, faNetworkWired, faDesktop, faRobot, faTools, faCogs, faMicrochip 
} from '@fortawesome/free-solid-svg-icons';


const Skills = () => {
  const skillsData = [
    { name: 'HTML5', icon: faHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: faCss3Alt, color: '#1572B6' },
    { name: 'JAVASCRIPT', icon: faJsSquare, color: '#F7DF1E' },
    { name: 'REACT JS', icon: faReact, color: '#61DAFB' },
    { name: 'PYTHON', icon: faPython, color: '#3776AB' },
    { name: 'C++', icon: faTools, color: '#00599C' },
    { name: 'JAVA', icon: faJava, color: '#ED8B00' },
    { name: 'SQL/MYSQL', icon: faDatabase, color: '#00758F' },
    { name: 'NETWORKING', icon: faNetworkWired, color: '#0088cc' },
    { name: 'OS INSTALL', icon: faDesktop, color: '#A2AAAD' },
    { name: 'AI PROMPTING', icon: faRobot, color: '#0088cc' },
    { name: 'GITHUB', icon: faGithub, color: '#FFFFFF' },
    { name: 'ESP32', icon: faMicrochip, color: '#E7352C' }, // ใช้สีแดงเข้มโทน Expressif หรือสี #0088cc ตามธีมใหม่ก็ได้ครับ
    { name: 'VS CODE', icon: faCode, color: '#007ACC' },
   
  ];

  return (
    <div className="container skills-page">
      <div className="content-container">
        <div className="header-section">
          <h1 className="title">Expertise & Tools</h1>
          <p className="subtitle">Bridging the gap between complex electronics and modern web development to build seamless digital experiences</p>
        </div>

        <div className="skills-layout">
          <div className="side-label">
            <span>SKILLS</span>
          </div>
          
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="icon-box">
                  <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} />
                </div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;