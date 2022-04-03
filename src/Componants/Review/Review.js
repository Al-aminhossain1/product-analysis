import React from 'react';

import './reveiw.css'

const Review = (props) => {
    const { name, rating, review } = props.review;

    return (
        <div className='review-card'>
            <h4>Name: {name}</h4>
            <p>Review:{review}</p>
            <p><small>Ratting:{rating}</small></p>

        </div>
    );
};

export default Review;