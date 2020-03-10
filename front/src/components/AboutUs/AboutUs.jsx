import React from 'react';
import './AboutUs.css';

function AboutUs({ name, img, position, info, link }) {
    return <div className="member-box">
        <div className="member-box__member">
            <img
                src={img}
                alt={name}
            />
            <div className="member__name-box">
                <h3>{name}</h3>
                <span>{position}</span>
            </div>
        </div>
        <p>{info} <br /> {link}</p>
    </div>
}

export default AboutUs;