import React from 'react';
import '../styles/Subscription.css';

function Subscription() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    alert('Subscribed successfully!');
  };

  return (
    <section className='subscription'>
      <div className='subscription-content'>
        <h2>Subscribe to Our Newsletter</h2>
        <p>Sign up for exclusive news, updates, and offers.</p>
        <form onSubmit={handleSubmit}>
          <div className='subscription-form'>
            <input
              type='email'
              placeholder='Enter your email'
              required
            />
            <button type='submit'>Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Subscription;
