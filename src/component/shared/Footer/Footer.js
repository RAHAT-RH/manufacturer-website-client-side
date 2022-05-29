import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer class="footer p-10 px-12 bg-neutral text-neutral-content">
            <div>
                <span class="footer-title">Services</span>
                <Link to='/' class="link link-hover">Home</Link>
                <Link to='/about' class="link link-hover">About</Link>
                <Link to='/contact' class="link link-hover">Contact</Link>
                <Link to='/' class="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <Link to='/about' class="link link-hover">Location</Link>
                <Link to='/about' class="link link-hover">Address</Link>
                <Link to='/' class="link link-hover">Phone</Link>
                <Link to='/' class="link link-hover">Press kit</Link>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <Link to='/' class="link link-hover">Terms of use</Link>
                <Link to='/' class="link link-hover">Privacy policy</Link>
                <Link to='/' class="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;