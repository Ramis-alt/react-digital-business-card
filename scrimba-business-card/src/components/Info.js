import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGitSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons"


export default function Info() {
    const afterClick = "https://www.linkedin.com/in/ramiro-renteria-24bba520/"
    const myGitHub = "https://github.com/Ramis-alt"
    return (
        <div className="main--body">
            <img src="./ProfImage1.png" alt="a headshot pic"/>
            <div className="profile-info">
                <h1>Ramiro Renteria</h1>
                <h4>Bay Valley Tech Web Developer Intern</h4>
                <h5>ramis28@yahoo.com</h5>
                <div className="profile-btns">
                    <button type="button" id="button1" onClick={() => window.open(myGitHub, '_blank')}><FontAwesomeIcon icon={faGitSquare}></FontAwesomeIcon>&nbsp;GitHub</button>
                    <button type="button" id="button2" onClick={() => window.open(afterClick, '_blank')}><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>&nbsp;LinkedIn</button>
                </div>
                <div className="myDetails">
                    <h2>About</h2>
                    <p>Welcome to my website! I'm a passionate Front End developer with a deep fascination for web development. 
                        I thrive on staying up-to-date with the latest technologies and best practices in the ever-evolving world of web development. 
                        Exploring new horizons and embracing continuous learning are integral parts of my journey. 
                        I'm excited to showcase my skills and share my experiences as I strive to create captivating and user-friendly web experiences. 
                        Join me as I push the boundaries of what's possible on the web!
                    </p>
                    <h2>Interests</h2>
                    <p>Tacos! Open to all kinds of music. Gamer. Outdoorsy. SciFi movie geek. 90's music. Traveling. Baseball.
                    </p>
                </div>
            </div>
        </div>
    )
}
