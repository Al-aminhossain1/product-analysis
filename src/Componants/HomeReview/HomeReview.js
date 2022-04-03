import React from 'react';
import './HomeReview.css'
const HomeReview = (props) => {
    const { name, rating, review } = props.review;

    return (
        <div className='home-card'>
            <h4>Name: {name}</h4>
            <p>Review:{review}</p>
            <p><small>Ratting:{rating}</small></p>

        </div>
    );
};

export default HomeReview;