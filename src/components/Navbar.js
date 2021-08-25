import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <h2>Movie Listo</h2>
            </div>
            <div className="nav-links">
                <ul>
                    <li>About</li>
                    <li>List</li>
                    <li>Contact</li>
                    <li>Api</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
