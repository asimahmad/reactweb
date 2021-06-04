import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond, faUmbrellaBeach, faMobileAlt, faGamepad, faPlaneDeparture, faStar, faHandSparkles, faMugHot} from '@fortawesome/free-solid-svg-icons'

function Services(props) {
    const services = [
        {
        icon:faMobileAlt,
        serviceName: "UI/UX Design",
        serviceDesc: "Best set fourth land god darkness make it wherein own."
        },
        {
        icon:faUmbrellaBeach,
        serviceName: "Web Development",
        serviceDesc: "A she'd bring void moving third she'd kind fill."
        },
        {
            icon:faMobileAlt,
            serviceName: "App/Mobile",
            serviceDesc: "Dominion man second spirit he, earth they're creeping."
        },
        {
            icon:faGamepad,
            serviceName: "Game Design",
            serviceDesc: "Morning has saying moveth it multipy appear life be."
        },
        {
            icon:faPlaneDeparture,
            serviceName: "Seo/Marketing",
            serviceDesc: "Give won't after land fill creeping meat you, may."
        },
        {
            icon:faStar,
            serviceName: "Photography",
            serviceDesc: "Creepeth one seas cattle grass give moving saw give."
        },
        {
            icon:faHandSparkles,
            serviceName: "Graphic Design",
            serviceDesc: "Open, great whales air rule for, fourth life whates."
        },
        {
            icon:faMugHot,
            serviceName: "Illustrations",
            serviceDesc: "Whales likeness hath, man kind for them air two won't."
        },
    ]


    return (
        <div id="services" className="services">
            {services.map(serv =>{
                return(
                    <>
                    <div className="serv" style={{marginTop:'4rem'}}>
                        <FontAwesomeIcon className="font-icon-serv" icon={serv.icon} style={{color:'black', marginBottom:'2rem'}}/>
                        <h5>{serv.serviceName}</h5>
                        <p>{serv.serviceDesc}</p>
                    </div>
                    </>
                )
            })}
        </div>
    );
}

export default Services;