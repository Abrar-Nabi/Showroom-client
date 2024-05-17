import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Nav from './Navbar'
import VehiclesSection from './VehiclesSection';
import IconsSection  from './IconsSections';
import ServicesSection from './ServiceSection';
import FeaturedSection from './FeaturedSection';
import NewsLetter from './NewsLetter';
import Reviews from './Reviews';
import ContactSection from './ContactSection';
import Footer from './Footer';
import './Home.css'
import image from './assets/images/homeCars.png';


const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const loggedInStatus = localStorage.getItem("loggedIn");
    useEffect(() => {
        const loggedInStatus = localStorage.getItem("loggedIn");
        if (loggedInStatus) {
          setLoggedIn(true);
         
        }
      }, []);
    
    return (
        <>
            <Nav/>
        <section className="home" id="home">
            <h1 className='homeHeading'>Find Your Car</h1>
            <img src={image} alt='img'/>
          {loggedIn ? ( <Link className='btn' to="/bookyourcar">Book Your Car</Link> ) : (<Link className='btn' to="/login">Book Your Car</Link> )}
            <IconsSection/>
            <VehiclesSection/>
            <ServicesSection/>
            <FeaturedSection/>
            <NewsLetter/>
            <Reviews/>
            <ContactSection/>
            <Footer/>
        </section></>
    );
};

export default Home;
