import React from 'react'
import './index.scss'

const Experience = () => {
  return (
    <div className="container experience-page">
      <div className="text-zone">
        <h1>Internship Experience</h1>
        <div className="job-box">
          <h2>SYNERGIC TECHNOLOGY CO., LTD.</h2>
          <p className="job-desc">
            รับผิดชอบการตรวจสอบและนำเข้าข้อมูลอุปกรณ์คอมพิวเตอร์ (Notebook, Printer) เข้าสู่ระบบของบริษัท [cite: 36]
          </p>
          
          <div className="highlight-projects">
            <h3>Key Projects:</h3>
            <ul>
              <li>
                <strong>Bank System Installation:</strong> ติดตั้งระบบคอมพิวเตอร์ให้กับสาขาของธนาคารไทยพาณิชย์ (SCB) และธนาคารกรุงศรี (Ayudhya) 
              </li>
              <li>
                <strong>Equipment Maintenance:</strong> ดูแลบำรุงรักษาอุปกรณ์สำนักงาน เช่น เครื่องนับธนบัตร, เครื่องพิมพ์ และคอมพิวเตอร์ภายในธนาคาร [cite: 38]
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;