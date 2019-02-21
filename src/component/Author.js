/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

import "./index.css";

import author from '../img/author.jpg';
import signature from '../img/signature.png';

const Author = () => {
    return (
        <section className="author section-spacing" id="Author">
            <div className="container">
                <header className="text-center">
                    <h2>About Author</h2>
                </header>
                <div className="row">
                <div className="col-md-5 text-center"> <img src={author} data-at2x={author} alt="author" className="author-img"/> </div>
                <div className="col-md-7">
                    <h4>Jessica Doe</h4>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </p>
                    <img src={signature} data-at2x={signature} alt="signature" className="signature"/> 
                    
                    <div className="social">
                    <ul>
                        <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://plus.google.com/"><i className="fab fa-google-plus"></i></a></li>
                        <li><a href="https://linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                    </div>                    
                </div>
                </div>
            </div>
        </section>

    );
}

export default Author;