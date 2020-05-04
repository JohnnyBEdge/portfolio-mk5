import React from 'react';
import '../comp-style/about.css';
import banner_img from '../comp-style/imgs/climber.jpg';
import '../comp-style/about.css';
import profile from '../comp-style/imgs/profile-pic.jpg'


const About = () =>{
    return (
        <>
            <div id="about_me" className="section">

                <div id="banner">
                    <div id="banner_img">
                        <img src={banner_img} alt="A climber on a rock face." />
                    </div>

                    <div id="summary">
                        <img id="profile_pic" src={profile} />
                        <p id="jmart">John Martin</p>
                        <p id="summary_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, ipsam! Voluptate doloremque aliquid recusandae necessitatibus similique. Illum, minus! Architecto necessitatibus, sequi quam excepturi eius nostrum dolor repudiandae quas beatae, vero pariatur omnis doloribus quisquam ipsam aliquam obcaecati voluptates temporibus. Tempore sit in quisquam dolor iure non, assumenda omnis sequi, aspernatur asperiores officiis quibusdam nemo ullam necessitatibus voluptatem cumque enim. Illo obcaecati odio a necessitatibus eum libero ab, fugit consequatur? Optio, eos recusandae officiis voluptates sit tempora neque libero consectetur, harum veniam dolorem commodi totam fuga quae, eum temporibus in. Voluptatum, libero ab reprehenderit dolore qui error consequuntur dolores cupiditate natus?</p>
                    </div>
                </div>

                <div id="value_card_container">
                    <div id="value1" className="valueCard">
                        <img src="#" alt="" />
                        <div className="card-content">
                            <h4>Efficiency</h4>
                            <p>With a background in triathlons, climbing and running a team within
                                 a fast-paced fulfillment center, I know how important it is to be 
                                 efficient. I work hard to insure my product is efficient without
                                  sacrificing readability.
                            </p>
                        </div>
                    </div>

                    <div id="value2" className="valueCard">
                        <img src="#" alt="" />
                        <div className="card-content">
                            <h4>Responsive</h4>
                            <p>Communication is key.
                            </p>

                        </div>
                    </div>

                    <div id="value3" className="valueCard">
                        <img src="#" alt="" />
                        <div className="card-content">
                            <h4>Excellence</h4>
                            <p>I strive to do the best that I can. In order to do so, I must be constantly learning and exploring new solutions, learn from the past and surround myself by others with similar values.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default About