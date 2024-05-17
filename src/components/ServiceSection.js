import React from 'react';
import ServiceSectionCard from './ServiceSectionCard';

// ServicesSection component

const ServicesSection = () => {
    return (
        <section className="services" id="services">
            <h1 className="heading">Our Services</h1>
            <div className="box-container">
             
                <ServiceSectionCard
                    icon="fa-car"
                    title="Car Selling"
                    description="Sell your car hassle-free at our showroom. Top prices, professional service guaranteed. Visit now!"
                    link="#"
                />
                <ServiceSectionCard
                    icon="fa-tools"
                    title="Parts Repairs"
                    description="Expert car parts repair for optimal performance. Quality service, skilled technicians. Visit RideExchange now!"
                    link="#"
                />
                <ServiceSectionCard
                    icon="fas fa-car-crash"
                    title="Car Insurance"
                    description="Comprehensive car insurance: Protect your vehicle, drive with confidence. Contact us for details!"
                    link="#"
                />
                <ServiceSectionCard
                    icon="fas fa-car-battery"
                    title="Battery Replacement"
                    description="Professional car battery replacement: Stay powered and reliable. Visit Ride Exchange for expert service!"
                    link="#"
                />
                <ServiceSectionCard
                    icon="fas fa-gas-pump"
                    title="Oil Change"
                    description="Professional oil change: Improve performance. Visit Ride Exchange for expert service!"
                    link="#"
                />
               
               <ServiceSectionCard
                    icon="fas fa-headset"
                    title="Customer Supprt"
                    description="24/7 car support: Reliable assistance anytime, anywhere. Contact Ride Exchange for immediate help!"
                    link="#"
                />
            </div>
        </section>
    );
};

export default ServicesSection;
