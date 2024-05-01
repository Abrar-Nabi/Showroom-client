import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>Our Branches</h3>
                    <a href="#"><i className="fas fa-map-marker-alt"></i>New Delhi</a>
                    <a href="#"><i className="fas fa-map-marker-alt"></i>Chandigarh</a>
                    <a href="#"><i className="fas fa-map-marker-alt"></i>Jammu-J&K</a>
                    <a href="#"><i className="fas fa-map-marker-alt"></i>Amritsar-Punjab</a>
                    <a href="#"><i className="fas fa-map-marker-alt"></i>Ludhiana-Punjab</a>
                    <a href="#"><i className="fas fa-map-marker-alt"></i>Jaipur-Rajasthan</a>
                </div>

                <div className="box">
                    <h3>Quick Links</h3>
                    <a href="#home"><i className="fas fa-home"></i>Home</a>
                    <a href="#vehicles"><i className="fas fa-car"></i>Vehicles</a>
                    <a href="#services"><i className="fas fa-cogs"></i>Services</a>
                    <a href="#featured"><i className="fas fa-star"></i>Featured</a>
                    <a href="#reviews"><i className="fas fa-envelope"></i>Reviews</a>
                    <a href="#contact"><i className="fas fa-headset"></i>Contact</a>
                </div>

                <div className="box">
                    <h3>Quick Links</h3>
                    <a href="#"><i className="fas fa-phone"></i>+123-456-7890</a>
                    <a href="#"><i className="fas fa-phone"></i>+193-654-7710</a>
                    <a href="#"><i className="fas fa-envelope"></i>rideex@gmail.com</a>
                    <a href="#"><i className="fas fa-envelope"></i>Amritsar- 143001</a>
                    <a href="#"><i class="fa-solid fa-user"></i>Admin</a>
                </div>

                <div className="box">
                    <h3>Quick Links</h3>
                    <a href="#"><i className="fab fa-facebook-f"></i>FaceBook</a>
                    <a href="#"><i className="fab fa-instagram"></i>Instagram</a>
                    <a href="#"><i className="fab fa-twitter"></i>Twitter</a>
                    <a href="#"><i className="fab fa-linkedin"></i>Linkedin</a>
                    <a href="#"><i className="fab fa-pinterest"></i>Pinterest</a>
                </div>
            </div>


            <div className="credit">
                Created by Rohit Kumar and Shubham Sharma <br />
                || &#169; All Rights are Reserved 2024 ||
            </div>
        </section>
    );
};

export default Footer;
