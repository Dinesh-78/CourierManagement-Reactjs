import { Button } from "bootstrap";
import React from "react";
import { Component } from "react";
import {BiMerge} from "react-icons/bi"
import { Link } from "react-router-dom";
import './Navbar.css';
export default class Navbar extends Component{
    
    render(){
    return(
        <nav className="navbar">
            <Link to='/' className="logo">Courier Management Service</Link>

              <div className="menu">
                <ul className="modules">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/booking'>Booking</Link></li>
                <li><Link to='/pricing'>Pricing</Link></li>
                <li><button className="btn"><Link to='/login'>Log In</Link></button></li>
               </ul>
               </div>              
        </nav>
    );
    }
}