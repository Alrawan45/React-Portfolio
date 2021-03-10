import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='container '>
            < nav className = "navbar navbar-expand-md navbar-light" >
                <a href="#home" className="navbar-brand"><span>Al-Rawan</span></a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navid">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className ="collapse navbar-collapse " id = "navid" >
                    < ul className = "navbar-nav ml-auto" >
                        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">about me</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skill">skills</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
