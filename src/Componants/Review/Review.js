import React from 'react';

import './Reveiw.css'

const Review = (props) => {
    const { name, rating, review, image } = props.review;

    return (
        <div className='review-card'>


            <p> <strong>Review: </strong>{review}</p>
            <p> <strong>Ratting:</strong> <small>{rating}</small></p>
            <p><img src={image} alt="" /> {name}</p>
        </div>
    );
};

export default Review;