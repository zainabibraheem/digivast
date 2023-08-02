import React from 'react'
import './home.css'
import home_image from '../image/one.JPG'

const Home = () => {
  return (
    <div className='home' >
      <div className='home-text'>
        <p className='text-header'><span>Onluck</span> Your <span>Online Potential</span> With <span>Us!</span></p>
        <p className='text-words'>We are committed to driving your success through innovative and data-driven digital marketing solutions. Our passionate team of experts specializes in boosting your online presence, generating leads, and maximizing conversions.</p>
        <div className='button-div'>
          <button className='learn-button'>Learn More</button>
          <button className='home-button'>Get Started Now</button>
        </div>

      </div>
      <div className='home-image'>
        <img src={home_image} alt='' />
      </div>
    </div>
  )
}

export default Home
