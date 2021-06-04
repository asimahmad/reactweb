import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Contact = () => {

    return (
        <div id="contact" className="contact">
            <h3>Need a project?</h3>
            <p>Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful.</p>
            <div className="contact-form">
            <form action="submit">
                <div className="con-grid">
                <input id="a" type="text" id="fname" name="name" placeholder="Your Name" />
                <input id="a" type="text" id="lname" name="title" placeholder="Your Email" />
                </div>
                <input type="text" id="fname" name="mail" placeholder="Your Title" />
                <input className="comment" type="text" id="lname" name="comment" placeholder="Your Comment" />
                <input type="submit" value="Send message" />
            </form>
            </div>
        </div>
    );
};

export default Contact;