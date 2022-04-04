import React from 'react';
import './HomeReview.css'
const HomeReview = (props) => {
    const { name, rating, review, image } = props.review;

    return (
        <div className='home-card'>
            <p> <strong>Review:</strong> {review}</p>
            <p> <strong>Ratting:</strong> <small>{rating}</small></p>
            <p><img src={image} alt="" /> {name}</p>

        </div>
    );
};

export default HomeReview;