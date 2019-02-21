import React from 'react';

import './index.css';

const Contact = () => {
    return (

        <section className="contact section-spacing" id="Contact">
        <div className="container">
            <header className="text-center">
            <h2>Drop Us A Message</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adip scing elit mauris</h3>
            </header>
            <div className="row">
            <div className="col-md-8 col-sm-11 center-block"> 
                                
                <div className="contact-form">
                <form action="#" method="post" id="contact-form">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required/>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" required/>
                    <textarea className="form-control" name="message" id="message" rows="4" placeholder="Enter Your Message" required></textarea>
                    <div className="text-center">
                    <button type="submit" className="btn btn-default submit-btn" id="submit-btn" value="Send">Send</button>
                    </div>
                </form>
                
                <div className="success-cf">
                    <p><i className='fa fa-envelope'></i>Thank You! Your message has been sent.</p>
                </div>
                <div className="error-cf">
                    <p><i className="fa fa-exclamation-triangle"></i>Something went wrong, try refreshing and submitting the form again.</p>
                </div>
                </div>
            </div>
            </div>
            </div>

            <ul className="address row text-center">
                <li className="col-sm-4"><i class="fas fa-map-marker-alt"></i>
                    <h4>Address</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                </li>
                <li className="col-sm-4"><i class="fas fa-phone"></i>
                    <h4>Phone</h4>
                <p>604-788-1832</p>
                </li>
                <li className="col-sm-4"><i className="fa fa-envelope"></i>
                    <h4>Email</h4>
                    <p>info@sitename.com</p>
                </li>
            </ul>
                
        </section>


    );
}

export default Contact;