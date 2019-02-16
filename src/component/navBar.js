import React from 'react';

import './index.css';

import logo_nav from "../img/logo-nav.png";
import logo from "../img/logo.png";


const NavBar = () => {
    return (
        <nav className="navbar navbar-default stick">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#Home"><img src={logo_nav} data-at2x={logo} alt="site name"/></a>
                    <button 
                        type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse-1"
                        aria-controls="bs-navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Toggle navigation</span> 
                        <span className="icon-bar"></span> 
                        <span className="icon-bar"></span> 
                        <span className="icon-bar"></span> 
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="bs-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Features">Features</a></li>
                        <li><a href="#Video">Video</a></li>
                        <li><a href="#Reviews">Reviews</a></li>
                        <li><a href="#Subscribe">Subscribe</a></li>
                        <li><a href="#Pricing">Pricing</a></li>
                        <li><a href="#Author">Author</a></li>
                        <li><a href="#Tweets">Tweets</a></li>
                        <li><a href="#Contact">Contact</a></li>
                        <li><a className="button" href="#Buy">Buy Now</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );

    // return (
    //         <nav className="navbar navbar-expand-lg navbar-light bg-light">
    // <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    // </button>
    // <a className="navbar-brand" href="#">Navbar</a>

    // <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    //     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    //     <li className="nav-item active">
    //         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    //     </li>
    //     <li className="nav-item">
    //         <a className="nav-link" href="#">Link</a>
    //     </li>
    //     <li className="nav-item">
    //         <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    //     </li>
    //     </ul>
    //     <form className="form-inline my-2 my-lg-0">
    //     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    //     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //     </form>
    // </div>
    // </nav>
    // );

}

export default NavBar;
