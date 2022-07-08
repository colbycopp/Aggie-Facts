import React from 'react';
import './Cybersecurity-Club.css';


function CybersecurityClub
() {
    return (
        <>
            <h1 className='title'>Cybersecurity Club</h1>
            <div className='cyberclub-sections'>
                <section>
                    <main id='cyberclub-main-section'>
                        <img src={require('../images/cybersecurity-club.jpeg')} id='cyberclub-main-img' />
                        <figcaption id='cyberclub-main-figcaption'>
                            <p>Texas A&M Cybersecurity Club is an organization for people interested 
                            in learning practical skills and knowledge in cybersecurity. Members of 
                            any skill level are welcome and there are NO dues or applications required to join.</p>
                        </figcaption>
                    </main>
                    <div className='cyberclub-info-clubs'>
                        <section className='cyberclub-info-clubs-club'>
                            
                        </section>
                    </div>
                </section>
            </div>
        </>    
    )
}

export default CybersecurityClub;