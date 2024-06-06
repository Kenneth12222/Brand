import React from 'react';
import '../styles/Service.css';

function Service() {
    return (
        <section className='service-about'>
            <div className='container'>
                <h1>How can we help you?</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.</p>
                <div className='service-row'>
                    <div className='service-col'>
                        <i className="fas fa-clipboard"></i>
                        <h3>Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.</p>
                    </div>
                    <div className='service-col'>
                        <i className="far fa-window-restore"></i>
                        <h3>Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.</p>
                    </div>
                    <div className='service-col'>
                        <i className="fas fa-paper-plane"></i>
                        <h3>Marketing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.</p>
                    </div>
                    <div className='service-col'>
                        <i className="fas fa-chart-line"></i>
                        <h3>Analytics</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.</p>
                    </div>
                    <div className='service-col'>
                    <i class="fas fa-lightbulb"></i>
                        <h3>Social Media</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.</p>
                    </div>
                    <div className='service-col'>
                    <i class="fas fa-cash-register"></i>
                        <h3>eCommerce</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.</p>
                    </div>
                    <div className='service-col'>
                    <i class="fas fa-headset"></i>
                        <h3>Help & Support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
