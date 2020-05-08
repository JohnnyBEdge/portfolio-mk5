import React from 'react';
import About from './About';
import Projects from './Projects';
import '../comp-style/display.css'
import Nav from './Nav';

const Display = () =>{
    return (
        <div id="main_container">
            <Nav />
            <About />
            {/* <Projects /> */}
        </div>
    );

}

export default Display