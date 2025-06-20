import React from 'react';
import SocialMediaButtons from 'react-social-media-buttons';
import bookk from '../img/foot.png';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer d-flex justify-content-center align-items-center">
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 text-center col'>
            <img src={bookk} alt="Book Logo" className='logo' />
         
          </div>
          <div className='col-md-3 col'>
            <h3>Labiray<div className='underline'><span></span></div></h3>
            <p>xyz Roed</p>
            <p>city , PIN 000000 ,India</p>
            <p className='email'>xyz@outlook.com</p>
            <h4>+91 -0123456789</h4>
          </div>
          <div className='col-md-3 link col text-center'>
            <h3>Links<div className='underline'><span></span></div></h3>
            <ul className='remove'>
              <li className='a'><NavLink className="nav-link" activeClassName="active" to="/book">Issue</NavLink></li>
              <li className='a'><NavLink className="nav-link" activeClassName="active" to="/about">about</NavLink></li>
              <li className='a'><NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink></li>
              <li className='a'><NavLink className="nav-link" activeClassName="active" to="/rating">Rating</NavLink></li>
            </ul>
          </div>
          <div className='col-md-3 text-center col'>
            <h3>Social Media<div className='underline'><span></span></div></h3>
            <br />
            <hr />
            <br />
            <SocialMediaButtons
              links={[
                'https://www.facebook.com/facebook',
                'https://twitter.com/Twitter',
                'https://www.instagram.com/instagram/',
                'https://www.linkedin.com/company/linkedin/'
              ]}
             className="social"
              iconStyle={{ color: '#7f6c6c' }}
              openNewTab={true}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
