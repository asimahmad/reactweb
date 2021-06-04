import React from 'react';

function Skills(props) {
    return (
        <div id="process" className="skills">
            <h2>Professional Skills</h2>
            <label>UI/UX design  75%</label>
            <progress value="75" max="100"></progress>
            <label>Web Development  90%</label>
            <progress value="90" max="100"></progress>
            <label>Marketing  65%</label>
            <progress value="65" max="100"></progress>
        </div>
    );
}

export default Skills;