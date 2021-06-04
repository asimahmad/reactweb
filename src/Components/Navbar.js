import React from 'react';
import logo from '../assets/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'


function Navbar(props) {

        window.addEventListener('scroll', function() {

            if (window.scrollY > 50) {
                document.getElementById('navbar_top').classList.add('fixed-top');
                // add padding top to show content behind navbar
                let navbar_height = document.querySelector('.navbar').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
            } else {
                document.getElementById('navbar_top').classList.remove('fixed-top');
                // remove padding top from body
                document.body.style.paddingTop = '0';
            }
        });
   

    return (
        <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
            <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Logo"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:'#181717'}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Home
                </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">
                        About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#work">
                        Work
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#process">
                        Process
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">
                        Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#testimonials">
                        Testimonials
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                        Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
);
}

export default Navbar;