import React, {Component} from 'react';

import CountUp from 'react-countup';

import './index.css';

const CounterItem = (props) => {
    return(
        <div className="col-sm-3 col-xs-6"> <i className={props.classTitle} ></i>
            <h3 className="total-number">
                <CountUp start={0} separator="," end={props.total} duration={3}/>
            </h3>
            <p>{props.title}</p>
        </div>
    );
};

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
    }

    render(){
        return (
            <div className="counter text-center"> 
                <div className="container">
                    <div className="row">
                        <CounterItem classTitle='fa fa-file-alt fa-3x' total={this.state.totalPage} title='Total Pages'/>
                        <CounterItem classTitle='fa fa-graduation-cap fa-3x' total={this.state.activeReader} title='Active Readers'/>
                        <CounterItem classTitle='fab fa-facebook-square fa-3x' total={this.state.facebookFan} title='Facebook Fans'/>
                        <CounterItem classTitle='fa fa-users fa-3x' total={this.state.subcriber} title='Subscribers'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;

