import React from 'react';
import './index.css';

import feature1 from '../img/feature-1.png';
import feature2 from '../img/feature-2.png';
import feature3 from '../img/feature-3.png';
import feature4 from '../img/feature-4.png';
import feature5 from '../img/feature-5.png';
import feature6 from '../img/feature-6.png';

const Item = (props) => {
    return (
        <div className="col-sm-4"> 
            <img src={props.feature} data-at2x={props.feature} alt="features"/> 
            <h4>Lorem Lpsum</h4>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    );
}

const Feature = () => {
    return (

        <section className="features section-spacing text-center" id="Features">
            <div className="container">
                <header>
                    <h2>Topics Covered In The Book</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adip scing elit mauris</h3>
                </header>

                <div className="row">
                    <Item feature={feature1}/>
                    <Item feature={feature2}/>
                    <Item feature={feature3}/>
                </div>

                <div className="row">
                    <Item feature={feature4}/>
                    <Item feature={feature5}/>
                    <Item feature={feature6}/>
                </div>
            </div>
        </section>

    );
};

export default Feature;