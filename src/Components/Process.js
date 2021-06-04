import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSuitcase, faClock, faStar} from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'

function Process(props) {
    return (
        <div className="process">
            <div className="process-div">
            <table style={{marginLeft:'2px'}}>
                    <tr>
                        <td>
            <FontAwesomeIcon className="font-icon" icon={faSuitcase} style={{color:'#fff'}}/>
            </td>
            <td>
                <CountUp className="count" end={548} duration={2} />
                <p>Project Completed</p>
                </td>
                </tr>
                </table>
                </div>
            <div className="process-div">
                <table>
                    <tr>
                        <td>
            <FontAwesomeIcon className="font-icon" icon={faClock} style={{color:'#fff'}}/>
            </td>
            <td>
            <CountUp className="count" end={1465} duration={3} />
                <p>Workig hours</p>
                </td>
                </tr>
                </table>
            </div>
            <div className="process-div">
            <table>
                    <tr>
                        <td>
            <FontAwesomeIcon className="font-icon" icon={faStar} style={{color:'#fff'}}/>
            </td>
            <td>
            <CountUp className="count" end={612} duration={2} />
                <p>Positive Feedback</p>
                </td>
                </tr>
                </table>
            </div>
            <div className="process-div">
            <table>
                    <tr>
                        <td>
            <FontAwesomeIcon className="font-icon" icon={faHeart} style={{color:'#fff'}}/>
            </td>
            <td>
            <CountUp className="count" end={735} duration={3} />
                <p>Happy Clients</p>
                </td>
                </tr>
                </table>
            </div>
            
        </div>
    );
}

export default Process;