import React from 'react';
import vitage from '../assets/vintage.jpeg';
import bike from '../assets/bike.jpeg'
import mountain from '../assets/mountain.jpeg'
import authentic from '../assets/authenti.jpeg'

function Partners(props) {

    const partners = [
        {
            id: 100,
            url:vitage
        },
        {
            id: 101,
            url:mountain
        },
        {
            id: 102,
            url:bike
        },
        {
            id:103,
            url:authentic
        }
    ];
    return (
        <div className="partners-gallery">
            {partners.map(partner =>{
                return <img  style={{width:'35vh', height:'20vh',cursor:'pointer'}} key={partner.id} src={partner.url}/>
            })}
        </div>
    );
}

export default Partners;