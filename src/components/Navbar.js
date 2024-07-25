import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* <li><Link to="/halls-available">Halls available</Link></li>
                <li><Link to="/payment">Payment</Link></li> */}
            </ul>
        </nav>
    );
}

export default Navbar;
