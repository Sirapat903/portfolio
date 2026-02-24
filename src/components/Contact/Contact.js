import React, { useRef } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // ข้อมูลที่คุณพัทตั้งค่าไว้
    emailjs.sendForm(
      'service_duvc252', 
      'template_6ijzkfl', 
      form.current,
      'Zs6G3PW0jOGI9xNHv'
    )
    .then((result) => {
        alert('ส่งข้อความสำเร็จแล้ว! ผมจะรีบติดต่อกลับนะครับ');
        e.target.reset();
    }, (error) => {
        alert('เกิดข้อผิดพลาด: ' + error.text);
    });
  };

  return (
    <div className="container contact-page">
      <div className="content-container">
        <div className="header-section">
          <h1 className="page-title">Contact</h1>
          <p className="subtitle">
            I'm interested in freelance opportunities or full-time positions. 
            If you have any questions, don't hesitate to contact me.
          </p>
        </div>

        <div className="contact-content">
          {/* ฝั่งซ้าย: ข้อมูลติดต่อ */}
          <div className="contact-info">
            <h2 className="section-title">Contact Info</h2>
            <div className="info-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="text-box">
                <h3>My Location</h3>
                <p>KMUTNB Pracharat Sai 1 Rd, Wongsawang, Bang Sue, Bangkok 10800</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div className="text-box">
                <h3>Phone Number</h3>
                <p>+66 96 814 2657</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="text-box">
                <h3>Email Address</h3>
                <p>Sirapat903@gmail.com</p>
              </div>
            </div>
          </div>

          {/* ฝั่งขวา: ฟอร์มส่งข้อความ */}
          <div className="contact-form-container">
            <h2 className="section-title">Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <input type="text" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
              </div>
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="Message" rows="5" required></textarea>
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;