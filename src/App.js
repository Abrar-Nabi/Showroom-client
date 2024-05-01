// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Home from './components/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/signup';
import AdminHome from './components/pages/adminhome';
import AdminBookingPage from './components/pages/BookingAppointments.js';
import UserBookingPage from './components/pages/showBookings.js';
import UserBookcar from './components/pages/bookcar.js';

const App = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/AdminHome" element={<AdminHome />} />
                <Route path="/bookings" element={<AdminBookingPage />} />
                <Route path="/yourbookings" element={<UserBookingPage />} />
                <Route path="/bookyourcar" element={<UserBookcar />} />
               
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
