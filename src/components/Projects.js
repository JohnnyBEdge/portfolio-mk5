import React from 'react';
import '../comp-style/projects.css';
import LearnCenter from '../comp-style/imgs/learn-center.png';

const Projects = () => {

    return (
        <>
            <div id="projects_container" className="section">
                <div id="project_1" className="project">
                    <div className="proj proj-img">
                        <div className="img-frame">
                            <img src={LearnCenter} alt="Project screenshot"/>
                        </div>
                    </div>
                    <div className="proj proj-info">
                        <p className="proj-title">Learning Center</p>
                        <p className="proj-desc">A personal collection of learning material including flashcards, a resource catalog and a place to create original content.</p>
                        <div className="tech-list">
                        <p className="tech-title">Tech</p>
                            <ul>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Reactstrap</li>
                            </ul>
                        </div>
                        <button className="view-btn">View Project</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Projects