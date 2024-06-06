import React from 'react';
import '../styles/Header.css';
import Navbar from './Navbar';

function Header() {
  return (
    <header className='header'>
      <Navbar />
      <div className='hero'>
        <div className='content-hero'>
          <h3>Fastest And Most Lightweight WP Theme</h3>
          <h1>Create Amazing <br /> Business Websites</h1>
          <p>
            Fastest And Most Lightweight WP Theme. Create Amazing Business Websites.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo.
            Praesent mattis commodo augue. Morbi fringilla congue libero, ac malesuada vulputate pharetra.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
