import React, {Component} from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll'

import './index.css';

import logo_nav from "../img/logo-nav.png";
import logo from "../img/logo.png";


class NavBar extends Component {
    constructor(props){
        super(props);

        this.handleScrol = this.handleScrol.bind(this);

        this.state = {
            classTitle: 'navbar navbar-expand-lg'
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScrol);
    }

    handleScrol(event){
        if(window.scrollY > 1050){
            this.setState({
                classTitle: 'navbar navbar-expand-lg stick'
            });
        }
        else{
            this.setState({
                classTitle: 'navbar navbar-expand-lg'
            });
        }
    }

    render(){
        return (
            <nav className={this.state.classTitle}>
                <div className="container">
                    <div className="navbar-header">
                        <a class="navbar-brand" href="#Home">
                            <img src={logo_nav} data-at2x={logo} alt="site name"/>
                        </a>
        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-navbar-collapse-1" 
                                aria-controls="bs-navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span> 
                                <span className="icon-bar"></span> 
                                <span className="icon-bar"></span> 
                                <span className="icon-bar"></span> 
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-navbar-collapse-1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <AnchorLink  className="nav-link" href="#Home">Home</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink className="nav-link" href="#Features">Feature</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink className="nav-link" href="#Video">Video</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink offset='100' className="nav-link" href="#Reviews">Reviews</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink className="nav-link" href="#Subscribe">Subscribe</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink className="nav-link" href="#Pricing">Pricing</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink className="nav-link" href="#Author">Author</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink className="nav-link" href="#Tweets">Tweets</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink className="nav-link" href="#Contact">Contact</AnchorLink>
                            </li>
                            <li><AnchorLink className="button" href="#Buy">Buy Now</AnchorLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default NavBar;
