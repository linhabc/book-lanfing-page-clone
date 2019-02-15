/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './index.css';

import logo_nav from "../img/logo-nav.png";
import logo from "../img/logo.png";
import ebook from "../img/ebook.png";


const Hero = () => {

    return (
        <section 
            className="hero skrollable skrollable-between" 
            data-0="background-position:0px 0px;" 
            data-500="background-position:0px -250px;" 
            id="Home" 
            style={{'background-position': '0px 0px'}}
        >
            
            <div className="overlay">
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="logo"> 
                        {/* <!--logo-->  */}
                        <a href="#">
                            <img src={logo_nav} data-at2x={logo} alt="site name"/> 
                        </a> 
                        {/* <!--logo end-->  */}
                        </div>
                    </div>
                </div>

                <div className="row skrollable skrollable-between" data-0="opacity: 1" data-800="opacity: 0" style={{opacity: 1}}>
                    <div className="col-md-7"> 
                        {/* <!--welcome message--> */}
                        <header className="welcome-message">
                            <h1>Perfect Landing Page To Sell Your Ebook</h1>
                            <h2>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Mauris hendrerit eros ac fermentum Fusce sodales enim at efficitur sagittis consectetur adip iscing elit.</h2>
                        </header>
                        {/* <!--welcome message end-->  */}
                        
                        {/* <!--action button--> */}
                        <div className="action-button"> 
                            <a href="#Features" className="button learn-more text-center">Learn More <i className="fa fa-arrow-right"></i></a> 
                            <a href="#" className="button buy text-center">Buy Now <i className="fa fa-shopping-cart"></i></a>
                            <p>*Avaliable in PDF, ePUB, Mobi &amp; Kindle.</p>
                        </div>
                        {/* <!--action button end-->  */}
                        
                    </div>

                    <div className="col-md-5 text-center"> 
                        <img src={ebook} alt="ebook" className="book-cover" data-no-retina=""/> 
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Hero;