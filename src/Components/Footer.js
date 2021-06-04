import React from 'react';

function Footer(props) {

    const footers = [
        {
            title:"Projects",
            link: "#projects"
        },
        {
            title:"News",
            link:"#news"
        },
        {
            title:"About",
            link:"#about"
        },
        {
            title: "Events",
            link:"#event"
        },
        {
            title:"Services",
            link:"#services"
        },
        {
            title:"Contact",
            link:"#contact"
        },
        {
            title:"Career",
            link:"#career"
        },
        {
            title: "Legals",
            link: "#legals"
        }
    ];
    return (
        <div className="footer">
            <div className="footer-sub">
                <h5>Devlopers Design Inc.</h5>
                <p>© 2021 Devlopers All rights resorved.</p>
                <p>Designed By: Asim</p>
            </div>
            <div className="footer-sub">
                <p>asimlpu123@gmail.com</p>
                <p>+91 9872545677</p>
            </div>
            <div className="footer-sub-div">
                {footers.map(footer =>{
                return <a style={{cursor:'pointer'}} key={footer} href={footer.link} >{footer.title}</a>
            })} 
            </div>
        </div>
    );
}

export default Footer;