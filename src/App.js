import React from "react";
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import {BrowserRouter as Router , Switch,Route} from "react-router-dom";
import Slider from "./slider/Slider";
import Signup from "./components/Signin";
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import Register from "./components/Register";
import Data from "./components/userData";

const App=() => {
  <Header />
  
  return(
    <>
      <Router>
        <Switch>
          <Route path='/' compontent ={Navbar} exact><Navbar /><Home /><br /><Footer /></Route>
          <Route path='/home' compontent={Home} exact><Home /></Route>
          <Route path='/Booking' component={Booking} exact><Booking /></Route>
          <Route path='/About' compontent ={About} exact><About /></Route>
          <Route path='/Footer' component={Footer} exact><Footer /></Route>
          <Route path='/Signup' compontent ={Signup} exact><Signup /></Route>
          <Route path='/Register' compontent ={Register} exact><Register /></Route>
          <Route path='/Data' compontent={Data} exact><Data /></Route>
        </Switch>
      </Router>
      
      
    </>
    
  ); 
}

export default App;
