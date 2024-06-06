import React, { useState } from 'react';
import api from '../api/api';
import '../styles/Portfolio.css';

function Portfolio() {
    const initialVisibleItems = 4;
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
        setShowAll(true); // Set showAll to true to display all items
    };

    return (
        <section className='portfolio'>
            <div className='portfolio-content'>
                <h1>Portfolio</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.</p>
                <div className='portfolio-row'>
                    {api.slice(0, showAll ? api.length : visibleItems).map((api_url, i) => (
                        <div key={i} className='portfolio-card'>
                            <img src={api_url.url} alt={`Portfolio ${i}`} />
                        </div>
                    ))}
                </div>
                {!showAll && (
                    <button className='explore-btn' onClick={handleShowMore}>
                        EXPLORE MORE
                    </button>
                )}
            </div>
        </section>
    );
}

export default Portfolio;
