import React from 'react';
import '../styles/OurTeam.css';

function OurTeam() {
  return (
    <div className='our-team'>
      <div className='our-team-content'>
        <h1>Meet Our Leadership</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className='our-team-image'>
          <div className='our-team-card'>
            <img src="https://images.pexels.com/photos/1752467/pexels-photo-1752467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Joanne Williams' />
            <h1>Joanne Williams</h1>
            <p>Founder</p>     
          </div>
          <div className='our-team-card'>
            <img src="https://images.pexels.com/photos/1846690/pexels-photo-1846690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Fred Buster' />
            <h1>Fred Buster</h1>
            <p>Director OPS</p>
          </div>
          <div className='our-team-card'>
            <img src="https://images.pexels.com/photos/3190334/pexels-photo-3190334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Lisa Hoffman' />
            <h1>Lisa Hoffman</h1>
            <p>Director HR</p>    
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
