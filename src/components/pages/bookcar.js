import React, { useState, useEffect } from "react";
import axios from "axios";

import "../styles/Appointment.css";

const Email = localStorage.getItem("userEmail");
const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    Name: "",
    date: "",
    phone: "",
    email: Email,
    carModel: "",
    carVariant: "",
    carColour: "",
    testDrive: "",
    paymentType: "",
  });
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/appointments")
      .then((response) => setAppointments(response.data))
      .catch((error) => console.error("Error fetching appointments:", error));
  }, []);

  const handleAddAppointment = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/appointments/add", newAppointment)
      .then((response) => {
        console.log(response.data);
        setAppointments([...appointments, response.data]);
        setNewAppointment({
          Name: "",
          date: "",
          phone: "",
          email: "",
          carModel: "",
          carVariant: "",
          carColour: "",
          testDrive: "",
          paymentType: "",
        });
        window.location.href = "/yourbookings";
      })
      .catch((error) => console.error("Error adding appointment:", error));
  };

  const handleUpdateAppointment = (id, e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:5000/appointments/update/${id}`,
        selectedAppointment
      )
      .then((response) => {
        console.log(response.data);
        const updateApp = { ...selectedAppointment, _id: id };
        setAppointments(
          appointments.map((appointment) =>
            appointment._id === id ? updateApp : appointment
          )
        );
        setSelectedAppointment(null);
        setIsEditMode(false); // Switch back to Add mode
      })
      .catch((error) => console.error("Error updating appointment:", error));
  };

  return (
    <div className='BookingContainer'>
     <a href="/" className="logo bookingLogo">Ride<span>Exchange</span></a>
      <div className="" style={{ width: "100%" }}>
        <div className="">
          <div className="add-form">
           
            <form
              className="appointment-form"
              onSubmit={
                isEditMode
                  ? (e) => handleUpdateAppointment(selectedAppointment._id, e)
                  : handleAddAppointment
              }
            >
               <h4>Book your Dream Car</h4>
              <label>Customer Name:</label>
              <input
                type="text"
                value={
                  isEditMode ? selectedAppointment.Name : newAppointment.Name
                }
                onChange={(e) =>
                  isEditMode
                    ? setSelectedAppointment({
                        ...selectedAppointment,
                        Name: e.target.value,
                      })
                    : setNewAppointment({
                        ...newAppointment,
                        Name: e.target.value,
                      })
                }
              />
              <label>Booking Date:</label>
              <input
                type="date"
                value={
                  isEditMode ? selectedAppointment.date : newAppointment.date
                }
                onChange={(e) =>
                  isEditMode
                    ? setSelectedAppointment({
                        ...selectedAppointment,
                        date: e.target.value,
                      })
                    : setNewAppointment({
                        ...newAppointment,
                        date: e.target.value,
                      })
                }
              />
              <label>phone:</label>
              <input
                type="text"
                value={
                  isEditMode ? selectedAppointment.phone : newAppointment.phone
                }
                onChange={(e) =>
                  isEditMode
                    ? setSelectedAppointment({
                        ...selectedAppointment,
                        phone: e.target.value,
                      })
                    : setNewAppointment({
                        ...newAppointment,
                        phone: e.target.value,
                      })
                }
              />
              <label>email:</label>
              <input type="email"value={isEditMode ? selectedAppointment.email : newAppointment.email
                }
                onChange={(e) =>
                  isEditMode
                    ? setSelectedAppointment({
                        ...selectedAppointment,
                        email: e.target.value,
                     })
                    : setNewAppointment({
                        ...newAppointment,
                        email: e.target.value,
                      }) 
                } disabled={true} 
              />
             <label>Vehicle Model:</label>
<select
    value={isEditMode ? selectedAppointment.carModel : newAppointment.carModel}
    onChange={(e) =>
        isEditMode
            ? setSelectedAppointment({ ...selectedAppointment, carModel: e.target.value })
            : setNewAppointment({ ...newAppointment, carModel: e.target.value })
    }
>
    <option value="">Select Model</option>
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
    {/* Add more options as needed */}
</select>

              <label>Car Edition:</label>
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
  <option value="">Select Edition</option>
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
  <option value="">Select Colour</option>
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
  <option value="">Select a payment method</option>
  <option value="Credit/Debit Card">Credit/Debit Card</option>
  <option value="EMI">EMI</option>
  <option value="Full Payment via Cash/Cheque">Full Payment via Cash/Cheque</option>
</select>
              <button type="submit"> Confirm Booking</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
