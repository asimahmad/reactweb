import React from 'react';
import video from '../Videos/Video.mp4'

function Work(props) {
    return (
        <div id="work" className="work">
            <h3>Our Work Process</h3>
            <p>Was years it seasons was there from the he in them together over that, third sixth gathered female creeping bearing behold years.</p>
            <video src={video} width="1300" height="300" controls="controls" autoPlay="false" />
        </div>
    );
}

export default Work;