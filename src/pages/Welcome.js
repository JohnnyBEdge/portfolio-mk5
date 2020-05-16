import React from 'react';
import Nav from './Nav';
import '../comp-style/welcome.css';
import {bounce} from 'react-animations';


const Welcome = () =>{
    return (
            <div id="welcome" className="section">
            <Nav />
                <div id="sum_container">
                    <h1 className = "animate__animated animate__bounce">Full-Stack Javascript Developer</h1>
                    <p id="summary">My name is John and I am a web developer based out of Salt Lake City, Utah. </p>
                </div>
            </div>
    );

};

export default Welcome;
