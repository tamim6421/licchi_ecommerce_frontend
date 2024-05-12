import React from 'react'
import Review from './Review'

const Reviews = () => {
  return (
   <div className="border border-b-2 mb-3">
     <div className='max-w-screen-lg mx-auto py-3 mb-3'>
        <div className="header">
            <h2 className='underline text-center'>Customer Ratings and Reviews</h2>
        </div>
        <div className="reviews_container grid grid-cols-1 md:grid-cols-2 gap-3 px-3">
            <Review />
            <Review />
            <Review />
            <Review />
        </div>
    </div>
   </div>
  )
}

export default Reviews