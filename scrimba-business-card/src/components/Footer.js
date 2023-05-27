import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGitSquare, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className="container">   
            <footer id="footer">
                <a href="https://github.com/Ramis-alt" target={'_blank'}><FontAwesomeIcon icon={faGitSquare} className="icon-style git-hub"></FontAwesomeIcon></a>
                <a href="https://twitter.com/IAmRamiroR" target={'_blank'}><FontAwesomeIcon icon={faTwitter} className="icon-style twi-tter"></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com/in/ramiro-renteria-24bba520/" target={'_blank'}><FontAwesomeIcon icon={faLinkedin} className="icon-style linked-in"></FontAwesomeIcon></a>
            </footer>
        </div>
    )
}