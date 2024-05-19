import React from 'react';
import '../styles/ServiceSection.css';
const ServiceSectionCard = ({ icon, title, description, link }) => {
    return (
        <div className="box">
            <i className={`fas ${icon}`}></i>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} className="btn">Read More</a>
        </div>
    );
};

export default ServiceSectionCard;
