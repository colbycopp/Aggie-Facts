import React from 'react'
import './TAMU-Lore.css'


function TAMULore() {
    return (
        <>
            <h1 className='title'>TAMU Lore</h1>
            <div className='tamu-sections'>
                <section className='tamu-sections-section' id='tamu-firstsection'>
                    <img src={require('../images/tamu-lore.jpeg')} className='tamu-section-images'/>
                    <figcaption className='tamuLore-figcaptions'>
                        <h2>Founding</h2>
                        <p>Texas A&M was founded in 1876 under the Morril Act. It was the first public university in Texas. </p>
                    </figcaption>
                </section>
                <section className='tamu-sections-section'>
                    <img src={require('../images/reveille.jpeg')} className='tamu-section-images'/>
                    <figcaption className='tamuLore-figcaptions'>
                        <h2>Revelli</h2>
                        <p>One weekend, in 1931, a few corps men got into an accident with a stray dog. 
                           The smuggled her back to campus to get her medicial attention. The next morning, 
                           she magically recovered and joined the cadets in morning formation, whilst listening 
                           to the trumpetier play Revelli. She would later become the official mascot of Texas A&M. </p>
                    </figcaption>
                </section>
                <section className='tamu-sections-section'>
                <img src={require('../images/12thman.jpg')} className='tamu-section-images'/>
                    <figcaption className='tamuLore-figcaptions'>
                        <h2>12th Man</h2>
                        <p>The legend of the 12th man began in 1922, when the Aggies were short on 
                            players for their upcoming football game. A corps member by the name of 
                            E. King Gill volunteered to be a backup on the football team. While he never played, 
                            he stood on the sidelines ready to play when called upon. </p>
                    </figcaption>
                </section>
                <section className='tamu-sections-section'>
                    <img src={require('../images/Aggie_Ring.jpg')} className='tamu-section-images'/>
                    <figcaption className='tamuLore-figcaptions' id='tamu-lastsection'>
                        <h2>AGGIE RING</h2>
                        <p>The tradition of the Aggie Ring dates back to 1889. The ring symbolizes 
                            a student's journey through Aggieland. A student will earn their Aggie Ring after 90 credit hours. </p>
                    </figcaption>
                </section>
            </div>
        </>    
    )
}

export default TAMULore;