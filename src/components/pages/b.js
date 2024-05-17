import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Bookings = () => {
        const [newBooking, setnewBooking] = useState({
            Name: '',
            carModel: '',
            date: '',
            phone: '',
            email: '',
            carColor: '',
            carVarient: '',
            paymentType: '',
            testDrive: '',
        });
        const [booking, setBooking] = useState([]);
        const [isEditMode, setIsEditMode] = useState(false);
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setnewBooking((prevBooking) => ({
            ...prevBooking,
            [name]: value
          }));
        };
      
        const handleFormSubmit = async (e) => {
          e.preventDefault();
          try {
            if (isEditMode) {
              await axios.post(`http://localhost:5000/bookings/update/${newBooking._id}`, newBooking);
              // Update the appointment in state if needed
            } else {
              const response = await axios.post('http://localhost:5000/appointments/add', newBooking);
              setnewBooking([...newBooking, response.data]);
            }
            setnewBooking({ Name:'',date:'', phone:'', email:'', paymentType:'', testDrive:'',carColor:'',carVarient:'',carModel:'' });
            setIsEditMode(false);
          } catch (error) {
            console.error('Error:', error);
          }
        };
  return (
    <div>
      <Navbar />
      <div className='flex-row' style={{ width: "100%" }}>
        <div className='flex-column'>
          <div className='add-form'>
            <h4>{isEditMode ? 'Edit Appointment' : 'Add New Appointment'}</h4>
            <form className="appointment-form" onSubmit={handleFormSubmit}>
              <input type="hidden" name="_id" value={newAppointment._id || ''} />
              <input type="text" name="patientName" placeholder="Patient Name" value={newBooking.patientName} onChange={handleInputChange} required />
              <input type="text" name="doctorName" placeholder="Doctor Name" value={newBooking.doctorName} onChange={handleInputChange} required />
              <input type="date" name="date" placeholder="Date" value={newBooking.date} onChange={handleInputChange} required />
              <input type="tel" name="phone" placeholder="Phone" value={newBooking.phone} onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Email" value={newBooking.email} onChange={handleInputChange} required />
              <input type="date" name="dob" placeholder="Date of Birth" value={newBooking.dob} onChange={handleInputChange} required />
              <input type="text" name="diseaseType" placeholder="Disease Type" value={newBooking.diseaseType} onChange={handleInputChange} required />
              <button type="submit">{isEditMode ? 'Update Appointment' : 'Confirm Booking'}</button>
            </form>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Bookings;