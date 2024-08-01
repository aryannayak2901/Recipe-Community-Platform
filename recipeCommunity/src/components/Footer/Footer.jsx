import React from 'react';
import '../../static/Footer/css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-links">
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Terms of Service</a>
                </div>
                <div className="newsletter-signup">
                    <form action="#">
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div className="social-media">
                    <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
