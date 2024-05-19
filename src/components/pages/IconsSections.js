import React from 'react';
import '../styles/IconSection.css'

const IconsSection = () => {
    return (
        <section className="icons-container">
            <div className="icons">
                <i className="fas fa-home"></i>
                <div className="content">
                    <h3>150+</h3>
                    <p>Branches</p>
                </div>
            </div>
            <div className="icons">
                <i className="fas fa-car"></i>
                <div className="content">
                    <h3>4770+</h3>
                    <p>Cars Sold</p>
                </div>
            </div>
            <div className="icons">
                <i className="fas fa-users"></i>
                <div className="content">
                    <h3>490+</h3>
                    <p>Happy Clients</p>
                </div>
            </div>
            <div className="icons">
                <i className="fas fa-car"></i>
                <div className="content">
                    <h3>350+</h3>
                    <p>New Cars</p>
                </div>
            </div>
        </section>
    );
};

export default IconsSection;
