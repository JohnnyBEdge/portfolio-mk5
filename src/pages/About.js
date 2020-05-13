import React from 'react';
import Profile from '../comp-style/imgs/profile-pic.png';
import '../comp-style/about.css';

const About = () => {
    return (
        <div>
            <div id="profile_container">
                <div id="profile_img_container">
                    <img src={Profile} alt="Profile image of John." />
                    <h2 id="author">John Martin</h2>
                    <p id="profile_summary">Hi, my name is John and I am a JavaScript Web Developer based out of Salt Lake City. From racing in triathlons, teaching English in Asia and working in the fast paced world of fulfillment, my diverse background has built a quiver of skillsets that make me a well-rounded developer. Here you will find some of my projects along with my contact information should you be interested in connecting!</p>
                </div>
            </div>

            <div id="tech_container">
                <ul>
                    <li>Tech Item</li>
                    <li>Tech Item</li>
                    <li>Tech Item</li>
                    <li>Tech Item</li>
                    <li>Tech Item</li>
                    <li>Tech Item</li>
                </ul>
            </div>
        </div>
    )
}

export default About;