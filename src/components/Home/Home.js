import React from 'react';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <section className="stylish-hero">
      <div className="container">
        <div className="content-center">
          
          <h1 className="main-title">
            PORTFOLIO <br />
          </h1>
          <h3 className="sub-title">
            <em>&</em> Sirapat Boonprasert <em>&</em> 
          </h3>
          
          <p className="description-text">
            Bridging the Gap Between Hardware Precision and Software Innovation
          </p>

          <div className="action-buttons">
            <a href="#about" className="btn-dark">Find Out More</a>
          </div>

        

        </div>
      </div>
    </section>
  );
};

export default Home;