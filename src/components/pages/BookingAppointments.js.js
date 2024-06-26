import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookingCard from '../cards/BookingCard';
import '../styles/Appointment.css';
import Sidebar from "../cards/sidebar";
const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({
        Name: '',
        date: '',
        phone: '',
        email: '',
        carModel: '',
        carVariant: '',
        carColour: '',
        testDrive: '',
        paymentType: ''
    });
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        axios
            .get('http://localhost:5000/Bookings')
            .then((response) => setAppointments(response.data))
            .catch((error) => console.error('Error fetching appointments:', error));
    }, []);

    const handleAddAppointment = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:5000/Bookings/add', newAppointment)
            .then((response) => {
                console.log(response.data);
                setAppointments([...appointments, response.data]);
                setNewAppointment({
                    Name: '',
                    date: '',
                    phone: '',
                    email: '',
                    carModel: '',
                    carVariant: '',
                    carColour: '',
                    testDrive: '',
                    paymentType: ''
                });
            })
            .catch((error) => console.error('Error adding appointment:', error));
    };

    const handleUpdateAppointment = (id, e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/Bookings/update/${id}`, selectedAppointment)
            .then((response) => {
                console.log(response.data);
                const updateApp = { ...selectedAppointment, _id: id };
                setAppointments(
                    appointments.map((appointment) => (appointment._id === id ? updateApp : appointment))
                );
                setSelectedAppointment(null);
                setIsEditMode(false); // Switch back to Add mode
            })
            .catch((error) => console.error('Error updating appointment:', error));
    };

    const handleDeleteAppointment = (id) => {
        axios
            .delete(`http://localhost:5000/Bookings/delete/${id}`)
            .then((response) => {
                console.log(response.data);
                setAppointments(appointments.filter((appointment) => appointment._id !== id));
            })
            .catch((error) => console.error('Error deleting appointment:', error));
    };

    const handleEditAppointment = (appointment) => {
        setSelectedAppointment(appointment);
        setIsEditMode(true); // Switch to Edit mode
    };
    const cancelbtn = () => {
        setIsEditMode(false);
    };

    return (
        <div className='bookingsContainer'>
        <Sidebar/>
        <div className="flex-row" style={{ width: '100%' }}>
            <div className="flex-column">

                {isEditMode ? (

                    <div className="add-form">
                        <h4>{isEditMode ? 'Edit Appointment' : 'Add New Appointment'}</h4>
                        <form
                            className="appointment-form"
                            onSubmit={
                                isEditMode
                                    ? (e) => handleUpdateAppointment(selectedAppointment._id, e)
                                    : handleAddAppointment
                            }
                        >
                            <label>Customer Name:</label>
                            <input
                                type="text"
                                value={isEditMode ? selectedAppointment.Name : newAppointment.Name}
                                onChange={(e) =>
                                    isEditMode
                                        ? setSelectedAppointment({ ...selectedAppointment, Name: e.target.value })
                                        : setNewAppointment({ ...newAppointment, Name: e.target.value })
                                }
                            />
                            <label>Booking Date:</label>
                            <input
                                type="date"
                                value={isEditMode ? selectedAppointment.date : newAppointment.date}
                                onChange={(e) =>
                                    isEditMode
                                        ? setSelectedAppointment({ ...selectedAppointment, date: e.target.value })
                                        : setNewAppointment({ ...newAppointment, date: e.target.value })
                                }
                            />
                            <label>phone:</label>
                            <input
                                type="text"
                                value={isEditMode ? selectedAppointment.phone : newAppointment.phone}
                                onChange={(e) =>
                                    isEditMode
                                        ? setSelectedAppointment({ ...selectedAppointment, phone: e.target.value })
                                        : setNewAppointment({ ...newAppointment, phone: e.target.value })
                                }
                            />
                            <label>email:</label>
                            <input
                                type="email"
                                value={isEditMode ? selectedAppointment.email : newAppointment.email}
                                onChange={(e) =>
                                    isEditMode
                                        ? setSelectedAppointment({ ...selectedAppointment, email: e.target.value })
                                        : setNewAppointment({ ...newAppointment, email: e.target.value })
                                }
                            />
                            <label>Vehicle Model:</label>
                            <select
  value={
    isEditMode
      ? selectedAppointment.carModel
      : newAppointment.carModel
  }
  onChange={(e) =>
    isEditMode
      ? setSelectedAppointment({
          ...selectedAppointment,
          carModel: e.target.value,
        })
      : setNewAppointment({
          ...newAppointment,
          carModel: e.target.value,
        })
  }
>
  <option value="">Select a car model</option>
    <option value="Beat">Beat</option>
    <option value="Bolero">Bolero</option>
    <option value="Fortuner">Fortuner</option>
    <option value="Hiace Van">Hiace Van</option>
    <option value="Hilux">Hilux</option>
    <option value="Innova">Innova</option>
    <option value="LandCruiser">LandCruiser</option>
    <option value="Polo">Polo</option>
    <option value="T Prime">T Prime</option>
    <option value="Swift">Swift</option>
</select>


                            <label>Car Variant:</label>
                            <select
  value={
    isEditMode
      ? selectedAppointment.carVariant
      : newAppointment.carVariant
  }
  onChange={(e) =>
    isEditMode
      ? setSelectedAppointment({
          ...selectedAppointment,
          carVariant: e.target.value,
        })
      : setNewAppointment({
          ...newAppointment,
          carVariant: e.target.value,
        })
  }
>
  <option value="">Select a car variant</option>
  <option value="Standard">Standard</option>
  <option value="Deluxe">Deluxe</option>
  <option value="Limited">Limited</option>
</select>

 
                            <label>Car Color:</label>
                            <select
  value={
    isEditMode
      ? selectedAppointment.carColour
      : newAppointment.carColour
  }
  onChange={(e) =>
    isEditMode
      ? setSelectedAppointment({
          ...selectedAppointment,
          carColour: e.target.value,
        })
      : setNewAppointment({
          ...newAppointment,
          carColour: e.target.value,
        })
  }
>
  <option value="">Select a car colour</option>
  <option value="Red">Red</option>
  <option value="Blue">Blue</option>
  <option value="White">White</option>
  <option value="Black">Black</option>
</select>

 
                            <label>Test Drive:</label>
                            <select
  value={
    isEditMode
      ? selectedAppointment.testDrive
      : newAppointment.testDrive
  }
  onChange={(e) =>
    isEditMode
      ? setSelectedAppointment({
          ...selectedAppointment,
          testDrive: e.target.value,
        })
      : setNewAppointment({
          ...newAppointment,
          testDrive: e.target.value,
        })
  }
>
  <option value="">Select an option</option>
  <option value="Yes">Yes</option>
  <option value="No">No</option>
</select>


<label>Payment Method:</label>
<select
  value={
    isEditMode
      ? selectedAppointment.paymentType
      : newAppointment.paymentType
  }
  onChange={(e) =>
    isEditMode
      ? setSelectedAppointment({
          ...selectedAppointment,
          paymentType: e.target.value,
        })
      : setNewAppointment({
          ...newAppointment,
          paymentType: e.target.value,
        })
  }
>
  <option value="">Select a payment type</option>
  <option value="Credit/Debit card">Credit/Debit card</option>
  <option value="EMI">EMI</option>
  <option value="Full Payment via Cash/Cheque">Full Payment via Cash/Cheque</option>
</select>

                            <div className='editformBtns'>
                                <button onClick={cancelbtn}>{'Cancel'}</button>
                                <button type="submit">{'Update Appointment'}</button>
                            </div>
                        </form>
                    </div>

                ) : <div className="appointments">
                    <h3>
                        Appointments 
                    </h3>
                    <div className="appointment-list">
                        {appointments.map((appointment) => (
                            <BookingCard
                                key={appointment._id}
                                appointment={appointment}
                                onEdit={handleEditAppointment}
                                onDelete={handleDeleteAppointment}
                            />
                        ))}
                    </div>
                </div>}
            </div>


        </div>
        </div>
    );
};

export default Appointments;
