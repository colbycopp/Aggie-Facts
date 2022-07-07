import React from 'react';
import './Cybersecurity-center.css';


function CybersecurityCenter() {
    return (
        <>
            <h1 className='title'>Cybersecurity Center</h1>
            <section className='cybercenter-sections'>
                <img src={require('../images/cybersecurity-center-img.png')} className='cybercenter-image'/>
                <h2>TEXAS A&M CYBERSECURITY CENTER</h2>
                <p>The Cybersecurity Center will only ahieve its vision by working with like-minded partners on 
                    problems of mutual interest and concern. Our partnerships will focus on the broad application 
                    of the Center's research, education and innovation for the public benefit</p>
            </section>
        </>    
    )
}

export default CybersecurityCenter;