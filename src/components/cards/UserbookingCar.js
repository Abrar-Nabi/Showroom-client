// src/components/AppointmentCard.js

import React from 'react';

const AppointmentCard = ({ appointment, onEdit, onDelete }) => {
    return (
        <div className="appointment-card">
            <p>
                <span>Name:</span>
                {appointment.Name}
            </p>
         
            <p>
                <span>Date:</span>
                {new Date(appointment.date).toLocaleDateString()}
            </p>
            <p>
                <span>Phone:</span>
                {appointment.phone}
            </p>
            <p>
                <span>Email:</span>
                {appointment.email}
            </p>
            <p>
                <span>Car Model:</span>
                {appointment.carModel}
            </p>
            <p>
                <span>Car Variant:</span>
                {appointment.carVariant}
            </p>
            <p>
                <span>Car Colour:</span>
                {appointment.carColour}
            </p>
            <p>
                <span>Test Drive:</span>
                {appointment.testDrive}
            </p>
            <p>
                <span>Payment Type:</span>
                {appointment.paymentType}
            </p>
        </div>
    );
};

export default AppointmentCard;
