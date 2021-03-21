// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    return (
        <div className='review-list'>
            <div className='review'>
                {props.review.display_title}
            </div>
        </div>
    )
}
export default MovieReviews