import React from 'react';

import './index.css';

import ebookPreview from '../img/ebook-preview.png'

const SubForm = () => {

    return(
        <section className="sub-form section-spacing text-center" id="Subscribe">
            <div className="container">
                <header>
                    <h2>Subscribe To Get A Preview</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adip scing elit mauris</h3>
                </header>
                <div className="row">
                <div className="col-md-8"> <img src={ebookPreview} alt="ebook preview" data-no-retina/> </div>
                <div className="col-md-4">
                    <form id="mc-form" action="#">
                    <div>
                        <input type="text" className="form-control" placeholder="First Name" name="fname" required id="mailchimp-fname"/>
                        <i className="fa fa-user first-name-i"></i></div>
                    <div>
                        <input type="text" className="form-control" placeholder="Last Name" name="lname" required id="mailchimp-lname"/>
                        <i className="fa fa-user last-name-i"></i></div>
                    <div>
                        <input type="email" className="form-control" placeholder="Email" required name="email" id="mailchimp-email"/>
                        <i className="fa fa-envelope"></i></div>
                    <button type="submit" className="btn btn-default">Subscribe</button>
                    </form>
                    <div className="result"></div>
                </div>
                </div>
            </div>
        </section>
    );

};

export default SubForm;