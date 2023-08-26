import React from 'react';
import './about.css'

function About() {
  return (
    <div className='about-us'>
      <h4 className='about-header'>ABOUT US</h4>

      <div className='about-div'>
        <div className='about'>
          <h2 className='about-title'><span>Digivast</span> <br /><br /> We are dedicated to hepling you grow</h2>
          <p className='about-text'>Building a successful business in this digital era requires implementation of excellent data-driven strategies with essential digital solutions.</p>
          <p className='about-text'>Take your business to the next level with Fluxworth and get value for your money.</p>
        </div>

        <div className='about'>
          <h2 className='about-title'><span>Digivast helps to</span> <br /><br /> Improve the visibility and sales of your brand.</h2>
          <p className='about-text'>We develop digital solutions to connect brands to the right audience in a hyper-competitive market, improving visibility and generating sales</p>
        </div>

        <div className='about'>
          <h2 className='about-title'><span>Digivast Development</span> <br /> <br /> Empower Your Business Presence</h2>
          <p className='about-text'>Your website is a critical digital footprint for your brand. Work with an expert team that understands exactly what you need to move forward.</p>
          <p className='about-text'>We develop highly functional, flexible and intuitive web solutions that deliver a smooth and efficient user experience.</p>
        </div>

        <div className='about'>
          <h2 className='about-title'><span>Digivast Development</span> <br /><br /> Evolve Beyond Spreadsheets</h2>
          <p className='about-text'>Increasing brand awareness and engagement is one of the greatest challenges most businesses struggle with. Building a successful business requires good strategies and marketing plans.</p>
        </div>
      </div>

      <div className='consultation-div'>
        <h3 className='consultation-title'>Free Consultation!</h3>
        <p className='consultation-text'>Book a Free concsultation.</p>
        <button className='consultation-button'>Chat Now</button>
      </div>
    </div>
  )
}

export default About
