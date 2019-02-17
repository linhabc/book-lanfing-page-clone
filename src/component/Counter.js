import React, {Component} from 'react';

import CountUp from 'react-countup';

import './index.css';

class Counter extends Component {
    constructor(props){
        super(props);

        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
            totalPage: 0,
            activeReader: 0,
            facebookFan: 0,
            subcriber: 0
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll(event){
        if(window.scrollY<1300 && window.scrollY>1200){
            this.setState({
                totalPage: 100,
                activeReader: 2000,
                facebookFan: 12000,
                subcriber: 15000
            });
        }
        // console.log(window.scrollY);
    }

    render(){
        return (
            <div className="counter text-center"> 
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-xs-6"> <i className="fa fa-file-alt fa-3x" ></i>
                            <h3 className="total-number-1">
                            <CountUp start={0} separator="," end={this.state.totalPage} duration={3}/>
                            </h3>
                            <p>Total Pages</p>
                        </div>
                        <div className="col-sm-3 col-xs-6"> <i className="fa fa-graduation-cap fa-3x"></i>
                            <h3 className="total-number-2">
                            <CountUp start={0} separator="," end={this.state.activeReader} duration={3}/>
                            </h3>
                            <p>Active Readers</p>
                        </div>
                        <div className="col-sm-3 col-xs-6"> <i className="fab fa-facebook-f fa-3x"></i>
                            <h3 className="total-number-3">
                            <CountUp start={0} separator="," end={this.state.facebookFan} duration={3}/>
                            </h3>
                            <p>Facebook Fans</p>
                        </div>
                        <div className="col-sm-3 col-xs-6"> <i className="fa fa-users fa-3x"></i>
                            <h3 className="total-number-4">
                            <CountUp start={0} separator="," end={this.state.subcriber} duration={3}/>
                            </h3>
                            <p>Subscribers</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default Counter;

