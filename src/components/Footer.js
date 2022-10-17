import React from "react";
import './Footer.css'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter} from "react-icons/bs";
const Footer = () =>{
    return(
        <>
        <div className="tail">
        
        <div className="row">
           <div className="col">
              <h3>Other services</h3>
              <ul>
                  <li><a>Groceries Delivery</a></li>
                  <li><a>Book Daily wage Workers </a></li>
                  <li><a>Transport</a> </li>
                  <li><a>Document Details</a></li>
              </ul>
           </div>
           <div className="col">
              <h3>Quick links</h3>
              <ul>
                  <li><a>Track the Order</a></li>
                  <li><a>Your Bills </a></li>
                  <li><a>XXXXX</a></li>
              </ul>
           </div>
           <div className="col">
              <h3>Social Media</h3>
              <ul>
                  <li> <a><BsFacebook /> facebook</a></li>
                  <li className="inst"><BsInstagram />  Instagram</li>
                  <li className="twit"> <BsTwitter /> Twitter</li>
              </ul>
           </div>
           <div className="comment">
            <h4>Leaving a single comment helps  to growth our company</h4>
            <input placeholder="comment me" />
             <button>Submit</button>
            </div>
        </div>
        
       
       </div> 
       </>
    )
}
export default Footer