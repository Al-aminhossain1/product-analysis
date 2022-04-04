import React from 'react';
import useReview from '../../hooks/UseReview';
import Review from '../Review/Review';

import './Reviews.css'
const Reviews = () => {
    const [review, setReview] = useReview();
    // console.log(review);

    return (
        <div >
            <h1>Our Customers Feedback!!</h1>
            <div className='reviews-container'>
                {
                    review.map(reviewitem => <Review
                        key={reviewitem.id}
                        review={reviewitem}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;