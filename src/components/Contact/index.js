import React from 'react'
import './index.scss'

const Contact = () => {
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>Contact Me</h1>
        <p>
          ผมพร้อมสำหรับการเรียนรู้และร่วมงานกับทีมโปรเจกต์ใหม่ๆ 
          หากมีข้อสงสัยหรือสนใจในทักษะด้านเทคโนโลยีและคอมพิวเตอร์ของผม 
          ติดต่อพัทได้โดยตรงตามช่องทางด้านล่างนี้ครับ
        </p>
        
        <div className="contact-cards">
          <div className="card">
            <div className="icon">📱</div>
            <div className="info">
              <h3>Phone</h3>
              <p>096-814-2657</p>
            </div>
          </div>

          <div className="card">
            <div className="icon">💬</div>
            <div className="info">
              <h3>Line ID</h3>
              <p>yuri15432</p>
            </div>
          </div>

          <div className="card">
            <div className="icon">📧</div>
            <div className="info">
              <h3>Email</h3>
              <p>s6703052411368@email.kmutnb.ac.th</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact