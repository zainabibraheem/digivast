import React from 'react'

import './services.css'


function Services(props) {
  return (
    <section className='services section'>
      <div className='services-container'>
        

        <div className='services'>

          <div className='services-text'>
            <h3 className='services-title'>{props.title}</h3>
            <p className='services-description'>{props.description}</p>
            <div className='services-button'> 
            <button className='services-learn-button'>Learn More</button>
            </div>
          </div>
          <div className='services-image'>
            <img src={props.img} alt='Services' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
