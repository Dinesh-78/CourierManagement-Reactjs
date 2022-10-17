import { Button } from "bootstrap";
import React from "react";
import './Home.css';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { isVisible } from "@testing-library/user-event/dist/utils";
import {TbTruckDelivery} from "react-icons/tb";
import { FcBusinessman } from "react-icons/fc";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { RiCustomerService2Fill } from "react-icons/ri";
const Home = () => {
   return(
    <>
        <div className="head">
         <div className="left2">
           <span className="fir">Delivery for 50 km </span>
           <span className="sec">Just 30 rs</span>
           <button className="btn">Send Courior Now</button> 
           </div>
           <div className="right">
            
            <img  src="./home.jpg" height="200"  />
           </div>
        </div>
        <div className="cards">
            
            <div className="card">
                <h1><TbTruckDelivery />  Our Deliveries</h1>
                <CountUp end={100} prefix="+" >
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} >
                <span  ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>               
            </div>
            <div className="card">
                <h1>< FcBusinessman />Our Customers</h1>
                <CountUp end={100} prefix="+" >
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} >
                <span  ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>               
            </div>
            <div className="card">
                <h1>< HiOutlineOfficeBuilding />Our Branches</h1>
                <CountUp end={100} prefix="+" >
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} >
                <span  ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>               
            </div>
            <div className="card">
                <h1><RiCustomerService2Fill />Our Employees</h1>
                <CountUp end={100} prefix="+" >
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} >
                <span  ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>               
            </div>
            </div>

       
        
    </>
   );
}

export default Home;