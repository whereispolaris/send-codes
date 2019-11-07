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
            {/* <h4>Santiago Enciso</h4>
            <h4>Joseph Hancock</h4>
            <h4>Suresh Mahato</h4>
            <h4>Lorena Ontiveros</h4> */}
            <div className="row">
                <div class="card profile-card" style={{ width: '15rem' }}>
                    <img src={Suresh} class="card-img-top" alt="santiago" />
                    <div class="card-body">
                        <h5 class="card-title">Suresh Mahato</h5>
                        <p class="card-text">Full Stack Deleloper</p>

                    </div>
                </div>
                <div class="card profile-card" style={{ width: '15rem' }}>
                    <img src={Joseph} class="card-img-top" alt="santiago" />
                    <div class="card-body">
                        <h5 class="card-title">Joseph Hancock</h5>
                        <p class="card-text">Full Stack Deleloper</p>

                    </div>
                </div>
                <div class="card profile-card" style={{ width: '15rem' }}>
                    <img src={Lorena} class="card-img-top" alt="santiago" />
                    <div class="card-body">
                        <h5 class="card-title">Lorena Ontiveros</h5>
                        <p class="card-text">Full Stack Deleloper</p>

                    </div>
                </div>
                <div class="card profile-card" style={{ width: '15rem' }}>
                    <img src={Santiago} class="card-img-top" alt="santiago" />
                    <div class="card-body">
                        <h5 class="card-title">Santiago Enciso</h5>
                        <p class="card-text">Full Stack Deleloper</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;