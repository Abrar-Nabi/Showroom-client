import React from 'react';
import '../styles/NewsLetter.css'; // Updated import statement to match the file name

const Newsletter = () => {
    return (
        <section className="newsletter">
            <h3>Subscribe for Latest News</h3>
            <p>Stay in the Fast Lane: Subscribe to Our Latest Car Updates for the Hottest Wheels and Expert Insights.</p>
            <form action="">
                <input type="email" placeholder="Enter your email..." name="" id="" />
                <input type="submit" className="subscribe" name="" id="" />
            </form>
        </section>
    );
};

export default Newsletter;
