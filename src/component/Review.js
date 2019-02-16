import React from 'react';

import Slider from 'react-slick';

import './index.css';

import reviewer1 from '../img/review-1.jpg';
import reviewer2 from '../img/review-2.jpg';
import reviewer3 from '../img/review-3.jpg';

const Personreview = (props) => {
    return (
        <div>
            <blockquote class="reviews-slider">
                <p className="quote"><i class="fa fa-quote-left"></i>{props.review}<i class="fa fa-quote-right"></i></p>
            </blockquote>
            <figure>
                <img src={props.face} data-at2x={props.face} alt="face" className="img-circle"/>
                <h4>{props.name}</h4>
                <p>{props.info}</p>
            </figure>
        </div>
    );
};

const Review = () => {

    const review = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, repellat, voluptatem eveniet et illum itaque excepturi repudiandae officiis quibusdam deleniti numquam in sint consequuntur excepturi repudiandae. ";

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

    return (
        <section class="reviews section-spacing text-center" id="Reviews">
            <div class="container">
                <h2>What Our Readers Are Saying</h2>
                <div class="row">
                    <div class="col-md-12">
                        <div class="review-slider"> 
                            <Slider {...settings}>
                                <Personreview review={review} face={reviewer1} name='John Doe' info='CEO, Abc Organisation'/>
                                <Personreview review={review} face={reviewer2} name='Ashley Doe' info='CEO, Abc Organisation'/>
                                <Personreview review={review} face={reviewer3} name='Michael Doe 'info='CEO, Xyz Organisation'/>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Review;

