import React from 'react'
import reviewData from "../components/reviewdata";
import './reviews.css'

function Reviews() {
  return (
    
      <section className='review-section'>
        <div className='review-header-div'>
          <h4 className='review-header'>Reviews</h4>

          <div className='review'>
            <h2 className='review-head'><span>Digivast Testimonials</span> <br /><br /> Genuine Reviews From Real Clients</h2>
            <p className='review-text'>Read unbiased reviews from clients who have enjoyed solid credibility and results from our services.</p>
          </div>

        </div>

        <div className='review-container'>
          {reviewData.map((item => {
            return (
              <div key={item}>
                <div className='review-div'>
                  <h4 className='review-name'>{item.name}</h4>
                  <p className='review-review'>{item.review}</p>
                  <h4 className='review-title'>{item.title}</h4>
                </div>
              </div> 
            )
          }))}
        </div>

      </section>
  
  )
}

export default Reviews
