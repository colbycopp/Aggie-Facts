import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
            <h1 className='title'>AGGIE FACTS</h1>
            <div className='web-sections'>
                <section id='home-section1'>
                    <Link to='./tamu-lore' className='web-sections-section' id='web-sections-link1'>
                        <img src={require('../images/tamu-lore.jpeg')} className='tamu-lore-img'id='web-sections-section-img1'/>
                        <h2>TAMU Lore</h2>
                        <p>Learn about the history and traidions of Texas A&M</p>
                    </Link>
                </section>
                {/* <section id='home-section2'>
                    <Link to='./cybersecurity-club' className='web-sections-section' id='web-sections-link2'>
                        <img src={require('../images/cybersecurity-club.jpeg')} className='tamu-lore-img'/>
                        <h2>CYBERSECURITY CLUB</h2>
                        <p>Learn about some of the activity groups the Cybersecurity Club has to offer</p>
                    </Link>
                </section> */}
                <section id='home-section3'>
                    <Link to='./cybersecurity-center' className='web-sections-section' id='web-sections-link3'>
                        <img src={require('../images/cybersecurity-center.png')} className='tamu-lore-img'/>
                        <h2>CYBERSECURITY Center</h2>
                        <p>Learn about the Cybersecurity Center here at Texas A&M</p>
                    </Link>
                </section>
            </div>
        </>
    )
}

export default Home;