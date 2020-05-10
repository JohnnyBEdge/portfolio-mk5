import React from 'react';
import '../comp-style/about.css';
import profile from '../comp-style/imgs/profile-pic.jpg'


const About = () =>{
    return (
            <div id="about_me" className="section">
                <div id="sum_container">
                    <h1>Full-Stack Javascript Developer</h1>
                    <p id="summary">My name is John and I am a web developer based out of Salt Lake City, Utah. </p>
                </div>
                
            </div>
    );

}

export default About;



//VERSION 1

// const About = () =>{
//     return (
//             <div id="about_me" className="section">
//                 <div id="profile-container">
//                     <img id="profile_img" />
//                     <p id="profile_summary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione nisi obcaecati sapiente a est iusto. Accusamus sed eius expedita quasi sequi aut. Quibusdam odio unde cum. Nulla reprehenderit voluptate dolores alias expedita iusto minima, rerum labore! Molestias mollitia facere tenetur.</p>
//                 </div>
//                 <div className="tech-container">
//                     <p>Tech</p>
//                     <ul>
//                         <li>Item</li>
//                         <li>Item</li>
//                         <li>Item</li>
//                         <li>Item</li>
//                         <li>Item</li>
//                         <li>Item</li>
//                     </ul>

//                 </div>
//             </div>
//     );

// }