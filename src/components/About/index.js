import React from 'react'
import './App.scss';
const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1 className="animate__animated animate__rubberBand">About Me</h1>
        <p>
          ผมชื่อ **ศิรพัชร บุญประเสริฐ (พัท)** กำลังศึกษาปริญญาตรีสาขาเทคโนโลยีอุตสาหกรรม 
          ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB) 
          ด้วยเกรดเฉลี่ยปัจจุบัน 2.69
        </p>
        
        <h2>Education</h2>
        <ul>
          <li>ปวส. เทคนิคคอมพิวเตอร์ | วิทยาลัยเทคนิคสมุทรสาคร (GPA: 3.60)</li>
          <li>ปวช. อิเล็กทรอนิกส์ | วิทยาลัยเทคนิคสมุทรสาคร (GPA: 3.30)</li>
        </ul>

        <h2>Technical Skills</h2>
        <div className="skills-tags">
          <span>C/C++</span>
          <span>HTML & SQL</span>
          <span>Linux (Ubuntu/Raspbian)</span>
          <span>VS Code</span>
        </div>
      </div>
      
      {/* ส่วนนี้คุณสามารถใส่ 3D Cube แบบในวิดีโอได้ */}
      <div className="stage-cube-cont">
        {/* ใส่ Icon C++, Linux, HTML ที่นี่ */}
      </div>
    </div>
  )
}

export default About;