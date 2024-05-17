import React from 'react' 
import logo from '../Images/calvin-logo.png'
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src= {logo} width = "150" height = "100" />
            </div>
            < ul class = "navbar-links">
                <li><Link to='/about-me'>About Me</Link></li>
                <li> Projects</li>
                <li> Resume </li>
            </ul>
        </nav>
    )
}

export default Navbar
