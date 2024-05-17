import React, { useState } from 'react';
import axios from 'axios';

import '../styles/booking.css'

const Bookings = () => {
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    phone: '',
    email: '',
    dob: '',
    diseaseType: '',
  });
  const [appointments, setAppointments] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await axios.post(`http://localhost:5000/appointments/update/${newAppointment._id}`, newAppointment);
        // Update the appointment in state if needed
      } else {
        const response = await axios.post('http://localhost:5000/appointments/add', newAppointment);
        setAppointments([...appointments, response.data]);
      }
      setNewAppointment({ patientName: '', doctorName: '', date: '', phone: '', email: '', dob: '', diseaseType: '' });
      setIsEditMode(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const handleEditClick = (appointment) => {
  //   setNewAppointment(appointment);
  //   setIsEditMode(true);
  // };

  return (
        <div className="book-appointment">
          <h2>{isEditMode ? 'Edit Appointment' : 'Book an Appointment'}</h2>
          <form onSubmit={handleFormSubmit}>
            <input type="hidden" name="_id" value={newAppointment._id || ''} />
            <input type="text" name="patientName" placeholder="Patient Name" value={newAppointment.patientName} onChange={handleInputChange} required />
            <input type="text" name="doctorName" placeholder="Doctor Name" value={newAppointment.doctorName} onChange={handleInputChange} required />
            <label htmlFor="date">Appointment Date:</label>
            <input type="date" name="date" placeholder="Date" value={newAppointment.date} onChange={handleInputChange} required />
            <input type="tel" name="phone" placeholder="Phone" value={newAppointment.phone} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Email" value={newAppointment.email} onChange={handleInputChange} required />
            <label htmlFor="date">Date of Birth:</label>
            <input type="date" name="dob" placeholder="Date of Birth" value={newAppointment.dob} onChange={handleInputChange} required />
            <input type="text" name="diseaseType" placeholder="Disease Type" value={newAppointment.diseaseType} onChange={handleInputChange} required />
            <button type="submit">{isEditMode ? 'Update Appointment' : 'Confirm Booking'}</button>
          </form>
        </div>
  
  );
};

export default Bookings;