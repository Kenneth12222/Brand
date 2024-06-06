import React from 'react';
import '../styles/OurCustomers.css';

function OurCustomers() {
  return (
    <div className='our-customers'>
      <div className='our-customers-content'>
        <h1>Our Customers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  anim id est laborum.
        </p>

        <div className='our-customers-brands'>
          <div className='our-customers-card'>
            <img src='https://www.unilever.com/content-images/92ui5egz/production/5b3550003de32697bef8264cca1e4e222dab891e-1920x1080.jpg?rect=420,0,1080,1080&w=600&h=600&fit=crop&auto=format' alt='Brand 1' />
          </div>
          <div className='our-customers-card'>
            <img src='https://www.unilever.com/content-images/92ui5egz/production/cbf31bf3c7783e3709cb762bbc5eede8a906f352-1080x1080.png?w=600&h=600&fit=crop&auto=format' alt='Brand 2' />
          </div>
          <div className='our-customers-card'>
            <img src='https://www.unilever.com/content-images/92ui5egz/production/24f94fc329570c04f01a285b29932d324bb7c056-1080x1080.png?w=600&h=600&fit=crop&auto=format' alt='Brand 3' />
          </div>
          <div className='our-customers-card'>
            <img src='https://www.unilever.com/content-images/92ui5egz/production/d806c6c7edf6271cb15478eae7c34485f4f35d41-1080x1080.jpg?w=600&h=600&fit=crop&auto=format' alt='Brand 4' />
          </div>
        </div>

        <div className='our-customers-work'>
          <h3>"Amazing Designs and Quality Work!"</h3>
          <p>Nam at congue diam. Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero, ac malesuada vulputate pharetra.</p>

          <div className='our-customer-profile'>
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Customer Profile' />
            <h3>John Doe</h3>
            <p>CEO, ACME INC.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCustomers;
