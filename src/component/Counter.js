import React from 'react';

import './index.css';

const Counter = () => {

        return (
            <div className="counter text-center"> 
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-xs-6"> <i className="fa fa-file-alt fa-3x" ></i>
                            <h3 className="total-number-1">100</h3>
                            <p>Total Pages</p>
                        </div>
                        <div className="col-sm-3 col-xs-6"> <i className="fa fa-graduation-cap fa-3x"></i>
                            <h3 className="total-number-2">1000</h3>
                            <p>Active Readers</p>
                        </div>
                        <div className="col-sm-3 col-xs-6"> <i className="fab fa-facebook-f fa-3x"></i>
                            <h3 className="total-number-3">1200</h3>
                            <p>Facebook Fans</p>
                        </div>
                        <div className="col-sm-3 col-xs-6"> <i className="fa fa-users fa-3x"></i>
                            <h3 className="total-number-4">1500</h3>
                            <p>Subscribers</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    
    }

export default Counter;