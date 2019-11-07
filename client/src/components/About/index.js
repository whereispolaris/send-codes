import React from 'react';
import './About.css';
import Lorena from './lorena.png';
import Suresh from './suresh.png';
import Joseph from './joseph.png';
import Santiago from './santiago.png';

const About = () => {
    return (
        <div className="container">
            <h2 className="text-center">About Send Codes</h2>
            <p>This project is developed by web developers for web developers with templates and code snippets to facilitate learning.
                Send-Codes is built to simplify boilerplates and access useful commands in a simple straight forward manner.
            </p>
            <h3 className="text-center">Project Developers</h3>
            <div className="row">
                <div className="card profile-card" style={{ width: '15rem' }}>
                    <img src={Suresh} className="card-img-top" alt="santiago" />
                    <div className="card-body">
                        <h5 className="card-title">Suresh Mahato</h5>
                        <p className="card-text">Full Stack Deleloper</p>

                    </div>
                </div>
                <div className="card profile-card" style={{ width: '15rem' }}>
                    <img src={Joseph} className="card-img-top" alt="santiago" />
                    <div className="card-body">
                        <h5 className="card-title">Joseph Hancock</h5>
                        <p className="card-text">Full Stack Deleloper</p>

                    </div>
                </div>
                <div className="card profile-card" style={{ width: '15rem' }}>
                    <img src={Lorena} className="card-img-top" alt="santiago" />
                    <div className="card-body">
                        <h5 className="card-title">Lorena Ontiveros</h5>
                        <p className="card-text">Full Stack Deleloper</p>

                    </div>
                </div>
                <div className="card profile-card" style={{ width: '15rem' }}>
                    <img src={Santiago} className="card-img-top" alt="santiago" />
                    <div className="card-body">
                        <h5 className="card-title">Santiago Enciso</h5>
                        <p className="card-text">Full Stack Deleloper</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;