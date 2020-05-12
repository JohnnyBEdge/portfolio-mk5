import React from 'react';
import '../comp-style/welcome.css';
import Nav from './Nav';

const style = {
    color: "red"
}

const Welcome = () =>{
    return (
        <div>
            
            <div id="welcome" className="section">
            <Nav />
                <div id="sum_container">
                    <h1>Full-Stack Javascript Developer</h1>
                    <p id="summary">My name is John and I am a web developer based out of Salt Lake City, Utah. </p>
                </div>
                
            </div>
        </div>
    );

};

export default Welcome;
