/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './index.css';

const Footer = () => {
    return (
        <footer className="site-footer section-spacing">
            <div className="container">
                <div className="row">
                <div className="col-md-12 text-center">
                    <p className="scroll-top"><a href="#Home"><i className="fa fa-chevron-up"></i></a></p>
                    <Social />
                    <small>&copy; Copyright Book. All Rights Reserved.</small>
                    <p><a href="#none" data-toggle="modal" data-target="#privacy">Privacy</a> | <a href="#none" data-toggle="modal" data-target="#terms">Terms of Use</a></p>
                    <PrivacyModal />
                    <TermOfUseModal/>
                </div>
            </div>
            </div>
        </footer>
    );
}

const Social = () => {
    return (
        <div className="social">
            <ul>
                <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://plus.google.com/"><i className="fab fa-google-plus"></i></a></li>
                <li><a href="https://linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
            </ul>
        </div>    
    );
}

const PrivacyModal = () => {
    return (
        <div className="modal fade" id="privacy" tabindex="-1" role="dialog" aria-labelledby="myModalLabel-privacy" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                <h4 className="modal-title" id="myModalLabel-privacy">Privacy</h4>
              </div>
              <div className="modal-body text-left">
                <p>Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>. Nullam iaculis libero non accumsan pharetra. Aenean vel est luctus, rhoncus sapien sit amet, pretium mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis libero non accumsan pharetra.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis libero non accumsan pharetra. Aenean vel <strong>est luctus</strong>, rhoncus sapien sit amet, pretium mauris.Lorem ipsum dolor sit amet. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Nullam iaculis</strong> libero non accumsan pharetra. Aenean vel est luctus, rhoncus sapien sit amet, pretium mauris.</p>
              </div>
            </div>
          </div>
        </div>
    );
}

const TermOfUseModal = () => {
    return (
        <div className="modal fade" id="terms" tabindex="-1" role="dialog" aria-labelledby="myModalLabel-terms" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                <h4 className="modal-title" id="myModalLabel-terms">Terms of Use</h4>
              </div>
              <div className="modal-body text-left">
                <p>Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>. Nullam iaculis libero non accumsan pharetra. Aenean vel est luctus, rhoncus sapien sit amet, pretium mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis libero non accumsan pharetra.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis libero non accumsan pharetra. Aenean vel <strong>est luctus</strong>, rhoncus sapien sit amet, pretium mauris.Lorem ipsum dolor sit amet. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Nullam iaculis</strong> libero non accumsan pharetra. Aenean vel est luctus, rhoncus sapien sit amet, pretium mauris.</p>
              </div>
            </div>
          </div>
        </div>
    );
}



export default Footer;