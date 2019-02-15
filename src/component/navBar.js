import React from 'react';

import './index.css';

import logo_nav from "../img/logo-nav.png";
import logo from "../img/logo.png";


const NavBar = () => {
    return (
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span> 
                        <span className="icon-bar"></span> 
                        <span className="icon-bar"></span> 
                        <span className="icon-bar"></span> 
                    </button>
                <a className="navbar-brand" href="#Home"><img src={logo_nav} data-at2x={logo} alt="site name"/></a>
            </div>

            <div className="collapse navbar-collapse" id="bs-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Features">Features</a></li>
                    <li><a href="#Video">Video</a></li>
                    <li><a href="#Reviews">Reviews</a></li>
                    <li><a href="#Subscribe">Subscribe</a></li>
                    <li><a href="#Pricing">Pricing</a></li>
                    <li><a href="#Author">Author</a></li>
                    <li><a href="#Tweets">Tweets</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="#Buy" className="button">Buy Now</a></li>
                </ul>
            </div>
        </div>
    </nav>
    );

}

export default NavBar;

// const NavBar = () => {
//     return (
//         <Container>
//             <Nav classNameName="navbar navbar-default">

//                 <div classNameName="navbar-header">
//                     {/* <button type="button" classNameName="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse-1"> 
//                         <span classNameName="sr-only">Toggle navigation</span> 
//                         <span classNameName="icon-bar"></span> <span classNameName="icon-bar"></span> 
//                         <span classNameName="icon-bar"></span> 
//                     </button> */}
//                     <a classNameName="navbar-brand" href="#">
//                         <img src={logo_nav} data-at2x={logo} alt="site name"/>
//                     </a> 
//                 </div>

//                 <NavItem>
//                     <NavLink href="#Home">Home</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#Features">Features</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#Video">Video</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#Reviews">Reviews</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#Subscribe">Subscribe</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#Pricing">Pricing</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#Author">Author</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#Tweets">Tweets</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink href="#Contact">Contact</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <a href="#Buy" classNameName="button">Buy</a>
//                 </NavItem>   
                
//             </Nav>

//         </Container>
//     );
// }

