import React from 'react';
import '../styles/ContactSection.css';
const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h1 className="heading">Contact us</h1>
            <div className="row">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.5811387023177!2d74.86405114608588!3d31.651483545197788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0xeea2605bee84ef7d!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1711558103702!5m2!1sen!2sin" allowFullScreen="" loading="lazy" title="map"></iframe>
                <form>
                    <h3>Get in Touch</h3>
                    <input type="text" placeholder="Name" className="box" />
                    <input type="email" placeholder="Email" className="box" />
                    <input type="number" placeholder="Mobile number" className="box" />
                    <textarea placeholder="Write message here..." className="box textarea" cols="40" rows="10"></textarea>
                    <input type="submit" value="Send Message" className="btn getInTouchBtn" /> 
                </form>
            </div>
        </section>
    );
};

export default Contact;
