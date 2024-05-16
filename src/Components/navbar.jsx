import React from 'react' 
import logo from '../Images/calvin-logo.png'
import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src= {logo} width = "150" height = "100" />
            </div>
            < ul class = "navbar-links">
                <li> Projects</li>
                <li> My Experience</li>
                <li> Resume </li>
            </ul>
        </nav>
    )
}

export default Navbar