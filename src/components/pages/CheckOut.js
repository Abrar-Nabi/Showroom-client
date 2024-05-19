import React from 'react';
import '../styles/CheckOut.css';
import Fortuner from '../assets/images/cars/fortuner.png'
function CarDetails() {
  return (
    <div className="container">
      <div className="car">
        <p className="logo">Ride<span>Exchange</span></p>
        <img src={Fortuner} alt="Car Image" />
        <h2 className="car-name">Fortuner</h2>
        <p className="basicDetails"> 
          <span className="fas fa-circle"></span><del>New</del>
          <span className="fas fa-circle"></span>2018
          <span className="fas fa-circle"></span>Manual
          <span className="fas fa-circle"></span>Petrol
          <span className="fas fa-circle"></span>140Km/h       
        </p>
        <div className="car-details">
          <div className="left-column">
            <ul>
              <li><b>Year:</b> 2018</li>
              <li><b>Color:</b> White</li>
              <li><b>Price:</b> ₹ 2,00,000/-</li>
            </ul>
          </div>
          <div className="right-column">
            <ul>
              <li><b>Odometer-Reading:</b> 3,77,000 KM</li>
              <li><b>Top-Speed:</b> 140 Km/H</li>
              <li><b>Code:</b> IR7675R067</li>
            </ul>
          </div>
        </div>
        <p className="end"><i>Note:- For more information please contact us or visit your nearest RideExchange Showroom.</i></p>
      </div>
    </div>
  );
}

export default CarDetails;
