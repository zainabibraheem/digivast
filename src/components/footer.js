import React from 'react';
import './footer.css'
import { BiCopyright } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (

    <div className='footer-section'>

      <div className='footer-container'>
        <div className='footer-about'>
          <div className='footer-logo'>DIGI<span>VAST</span></div>
          <p className='footer-text'>We provide digital solutions that help your brand WIN and stand out in a hyper-competitive marketplace.</p>
          <button className='link-button btn'>Join Us</button>
        </div>

        <div className='footer-links'>
          
          <div className='links'>
            <ul className='link-items'>
              <li className='links-title'>LINKS</li>
              <li className='link-item'>Our Packages</li>
              <li className='link-item'>Branding</li>
              <li className='link-item'>Social Media</li>
              <li className='link-item'>Careers</li>
              <li className='link-item'>Help</li>
              <li className='link-item'>Support</li>
            </ul>
          </div>

        </div>

        <div className='newsletter'>
          <h2 className='newsletter-title'>NEWSLETTER</h2>
          <p className='newsletter-text'>Subscribe to our Newsletter for the latest updates.</p>
          <input className='newsletter-input' type='text' placeholder='enter your e-mail' /><br /> <br />
          <button className='newsletter-btn btn'>Subscribe Now</button>
        </div>



      </div>
      <hr className='hr'></hr>

      <div className='copyright-div'>
       
        <p>2023 <BiCopyright size={12} /> All rights reserved by DIGIVAST.</p>


        <div>
          <FaFacebookF className='sm-logo' size={18} />
          <FaInstagram className='sm-logo' size={18} />
          <FaTwitter className='sm-logo' size={18} />
          <FaLinkedin className='sm-logo' size={18} />
        </div>
      </div>
    </div>



  )
}

export default Footer
