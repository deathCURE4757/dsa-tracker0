import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MandImage from '../assets/Mands.jpg'

function AboutUs() {
    // Sample data for demonstration
    const profiles = [
        {
            name: 'Garv Singh',
            email: 'sahilsingh050245@gmail.com',
            image: MandImage,
            alt: 'GArv Profile',
        },
    ];
    return (
        <React.Fragment>
            <Navbar />
            <div className="abtusheading">
              Garv SIngh
            </div>
            <div id="abtus">
                {profiles.map((profile, index) => (
                    <div key={index} className="card">
                        <div className="image">
                            <img src={profile.image} alt={profile.alt} />
                            {/* <h1>{profile.image}</h1> */}
                        </div>
                        <div className="details">
                            <h2>{profile.name}</h2>
                            <p>{profile.email}</p>
                            <p>{profile.number}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default AboutUs;