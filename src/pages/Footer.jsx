import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-logo'>
                    <h2>Brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='footer-links'>
                    <h2>Company</h2>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Portfolio</a></li>
                        <li><a href='#'>Contact Us</a></li>
                    </ul>
                </div>
                <div className='footer-links'>
                    <h2>Legal</h2>
                    <ul>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Terms of Service</a></li>
                        <li><a href='#'>Disclaimer</a></li>
                    </ul>
                </div>
                <div className='footer-links'>
                    <h2>Follow Us</h2>
                    <ul>
                        <li><a href='#'><i className='fab fa-facebook'></i> Facebook</a></li>
                        <li><a href='#'><i className='fab fa-twitter'></i> Twitter</a></li>
                        <li><a href='#'><i className='fab fa-instagram'></i> Instagram</a></li>
                        <li><a href='#'><i className='fab fa-linkedin'></i> LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; 2024 Brand. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
