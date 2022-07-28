import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1"><NavLink to="/about"  className="nav-link py-3 px-0 px-lg-3 rounded">About</NavLink></li>
                    <li className="nav-item mx-0 mx-lg-1"><NavLink to="/portfolio" className="nav-link py-3 px-0 px-lg-3 rounded">Portfolio</NavLink></li>
                    <li className="nav-item mx-0 mx-lg-1"><NavLink to="/contact" className="nav-link py-3 px-0 px-lg-3 rounded">Contact</NavLink></li>
                    {/* <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li> */}
                </ul>
                </div>
            </div>
            </nav>
            <header className="masthead bg-primary text-white text-center">
            </header>
        </div>   
        );
    }
}

export default Nav;