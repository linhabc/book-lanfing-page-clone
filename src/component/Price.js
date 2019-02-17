import React from 'react';

import './index.css';

const PriceTab = (props) => {
    return (
        <div className="plan">
          <div className={props.classTitle}>
            <h4>{props.pack}</h4>
            <div className="price"><span className="currency">$</span>{props.price}<span className="period">/ Per Copy</span> </div>
          </div>
          <ul className="plan-features clearfix">
            <li>Topics Covered<i className={props.status1}></i></li>
            <li>Topics Covered<i className={props.status2}></i></li>
            <li>Topics Covered<i className={props.status3}></i></li>
            <li>Topics Covered<i className={props.status4}></i></li>
            <li>Topics Covered<i className={props.status5}></i></li>
            <li>Topics Covered<i className={props.status6}></i></li>
          </ul>
          <div className="buy-button"><a className="button" href="#Buy">Buy Now<i className="fa fa-shopping-cart"></i></a></div>
        </div>
    );
};


const Price = () => {
    return(
        <section class="prices text-center section-spacing" id="Pricing">
            <div class="container">
                <header>
                    <h2>Pricing And Plans</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adip scing elit mauris</h3>
                </header>
                <div class="row">
                    <div class="col-md-4"> 
                        <PriceTab classTitle="header" pack='Standard pack' price={50} 
                                  status1='fa fa-check' status2='fa fa-check' status3='fa fa-check'
                                  status4='fa fa-ban' status5='fa fa-ban' status6='fa fa-ban'/>
                    </div>
                    <div class="col-md-4"> 
                        <PriceTab classTitle="header" pack='Pro pack' price={75}
                                  status1='fa fa-check' status2='fa fa-check' status3='fa fa-check'
                                  status4='fa fa-check' status5='fa fa-ban' status6='fa fa-ban'/>
                    </div>
                    <div class="col-md-4"> 
                        <PriceTab classTitle="header nerd" pack='Nerd pack' price={100}
                                  status1='fa fa-check' status2='fa fa-check' status3='fa fa-check'
                                  status4='fa fa-check' status5='fa fa-check' status6='fa fa-check'/>
                    </div>   
                </div>
            </div>
        </section>
    );
};

export default Price;