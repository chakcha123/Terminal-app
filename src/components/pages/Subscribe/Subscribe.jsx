import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <div className='subscribe_container'>
      <h1>Choose Your Plan</h1>
      <div className='subscribe_cards'>
        {/* Free Plan */}
        <div className='card'>
          <h2>Free Plan</h2>
          <p>Access basic features for free</p>
          <button>Subscribe</button>
        </div>
        {/* Pro Plan */}
        <div className='card'>
          <h2>Pro Plan</h2>
          <p>Unlock additional features for $9.99/month</p>
          <button>Subscribe</button>
        </div>
        {/* Pro Max Plan */}
        <div className='card'>
          <h2>Pro Max Plan</h2>
          <p>Get all premium features for $19.99/month</p>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
