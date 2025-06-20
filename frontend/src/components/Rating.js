import React, { useState } from 'react';
import './rating.css';
import gif from '../img/gif.gif';

function Rating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className='rat'><br></br>
       <h1 className="text-uppercase fw-bold font-monospace text-center">Rate this page</h1>
    <div className='container rating'>
      <div className='rating-container'>
        <div className="star-widget">
          {[...Array(5)].map((_, index) => (
            <span key={index} onClick={() => handleStarClick(index)}>
              {index < rating ? '★' : '☆'}
            </span>
          ))}
        </div>
        <p className='star-latter'>Your rating: {rating}</p>
        <hr />
        <h3 className='feedback'>Feedback</h3>
        <form>
          <textarea className='area form-control' rows={4} cols={2} placeholder='Enter your feedback.....'></textarea><br></br>
          <button type='button' className='btn btn-outline-dark '>submit</button>
        </form>
      </div>
      <div className='gif'>
        <img src={gif} alt="" className='im'/>
      </div>
    </div>
    </div>
  );
}

export default Rating;
