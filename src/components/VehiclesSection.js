import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import './VehiclesSection.css'
import Swiper from "swiper";
import car1 from "./assets/images/cars/fortuner.png";
import car2 from "./assets/images/cars/hilux.png";
import car3 from "./assets/images/cars/landCruiser.png";
import car4 from "./assets/images/cars/hiaceVan.png";
import car5 from "./assets/images/cars/RAV4.png";
import car6 from "./assets/images/cars/bolero.png";
import car7 from "./assets/images/cars/tprime.png";

import CheckOut from "./CheckOut";
import "swiper/swiper-bundle.css";

const VehiclesSection = () => {
  useEffect(() => {
    const swiper = new Swiper(".vehicles-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });

    
  }, []); 

  return (
    <section className="vehicles" id="vehicles">
      <h1 id="popVeh" className="heading">
        Popular Vehicles
      </h1>
      <div className="swiper vehicles-slider">
        <div className="swiper-wrapper">

          <div className="swiper-slide box">
            <img src={car1} alt="IMG 1" />
            <div className="content">
              <h3>Fortuner</h3>
              <div className="price">
                <span>Price:</span>&#8377; 20,00,000/-
              </div>
              <p>
                <del>New</del>
                <span className="fas fa-circle"></span>2020
                <span className="fas fa-circle"></span>Automatic
                <span className="fas fa-circle"></span>Petrol
                <span className="fas fa-circle"></span>176Km/h
              </p>
              <a href="#"  className="btn checkOutBtn">
                Check Out
              </a>
            </div>
          </div>
          <div className="swiper-slide box">
            <img src={car2} alt="IMG 1" />
            <div className="content">
              <h3>Hilux</h3>
              <div className="price">
                <span>Price:</span>&#8377; 25,50,000/-
              </div>
              <p>
                <del>New</del>
                <span className="fas fa-circle"></span>2021
                <span className="fas fa-circle"></span>Automatic
                <span className="fas fa-circle"></span>Diesel
                <span className="fas fa-circle"></span>185Km/h
              </p>
              <Link to={CheckOut} className="btn" >
              Check Out</Link>

            </div>
          </div>
          <div className="swiper-slide box">
            <img src={car3} alt="IMG 1" />
            <div className="content">
              <h3>Land Cruiser</h3>
              <div className="price">
                <span>Price:</span>&#8377; 45,75,000/-
              </div>
              <p>
                <del>New</del>
                <span className="fas fa-circle"></span>2019
                <span className="fas fa-circle"></span>Automatic
                <span className="fas fa-circle"></span>Diesel
                <span className="fas fa-circle"></span>190Km/h
              </p>
              <a href="#"  className="btn">
                Check Out
              </a>
            </div>
          </div>
          <div className="swiper-slide box">
            <img src={car4} alt="IMG 1" />
            <div className="content">
              <h3>Hiace Van</h3>
              <div className="price">
                <span>Price:</span>&#8377; 18,25,000/-
              </div>
              <p>
                <del>New</del>
                <span className="fas fa-circle"></span>2020
                <span className="fas fa-circle"></span>Automatic
                <span className="fas fa-circle"></span>Petrol
                <span className="fas fa-circle"></span>160Km/h
              </p>
              <a href="#"  className="btn">
                Check Out
              </a>
            </div>
          </div>



          <div className="swiper-slide box">
            <img src={car5} alt="IMG 1" />
            <div className="content">
              <h3>RAV4</h3>
              <div className="price">
                <span>Price:</span>&#8377; 25,00,000/-
              </div>
              <p>
                <del>New</del>
                <span className="fas fa-circle"></span>2022
                <span className="fas fa-circle"></span>Automatic
                <span className="fas fa-circle"></span>Petrol
                <span className="fas fa-circle"></span>185Km/h
              </p>
              <a href="#"  className="btn checkOutBtn">
                Check Out
              </a>
            </div>
          </div>

          <div className="swiper-slide box">
            <img src={car6} alt="IMG 1" />
            <div className="content">
              <h3>Bolero</h3>
              <div className="price">
                <span>Price:</span>&#8377; 70,50,000/-
              </div>
              <p>
                <del>New</del>
                <span className="fas fa-circle"></span>2023
                <span className="fas fa-circle"></span>Automatic
                <span className="fas fa-circle"></span>Diesel
                <span className="fas fa-circle"></span>125Km/h
              </p>
              <a href="#"  className="btn checkOutBtn">
                Check Out
              </a>
            </div>
          </div>

          <div className="swiper-slide box">
            <img src={car7} alt="IMG 1" />
            <div className="content">
              <h3>T-Prime</h3>
              <div className="price">
                <span>Price:</span>&#8377; 16,50,000/-
              </div>
              <p>
                <del>New</del>
                <span className="fas fa-circle"></span>2023
                <span className="fas fa-circle"></span>Automatic
                <span className="fas fa-circle"></span>Petrol
                <span className="fas fa-circle"></span>224Km/h
              </p>
              <a href="#"  className="btn checkOutBtn">
                Check Out
              </a>
            </div>
          </div>

        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default VehiclesSection;
