import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Component } from "react";
import './Signup.css';

export default class Signup extends Component{
    constructor(props){
        super (props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit=this.handleSubmit.bind(this)
    }

   handleSubmit(e){
    e.preventDefault();
        const {email,password} = this.state;
        console.log(email,password);
        fetch("http://localhost:5000/login",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email,
                password,
            }),
        }).then((res)=> res.json())
        .then((data)=>{
            console.log(data,"userLogin");
            if(data.status=="ok"){
                alert("Login into website");
                window.localStorage.setItem("token",data.data);
                window.location.href="./Data";
            }
        });
   }

  
  render(){
    /*const [email ,setemail]=useState('');
   const [error, seterror]=useState(null);
    function isvalidemail(Email){
        return /\S+@\S+\.\S+/.test(email);
       }
       const handlechange = e =>{
        if(!isvalidemail(e.target.value)){
            seterror('Email is invalid');
        }
        else{
            seterror(null);
        }
        setemail(e.target.value);
       }; */
  return (
    <>
    <div className="formup">
    <form onSubmit={this.handleSubmit}>
       
       <div className="container">
       <h1>Login Form</h1>
        <div className="field">
        <i class="zmdi zmdi-account-box"></i>
            <input type="text" name="some" placeholder onChange={(e) => this.setState({ email: e.target.value})} />
        </div>
        <div className="field">
        <i class="zmdi zmdi-keyboard-hide"></i>
            <input type="text" name="password" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
        </div>
        <button type="submit" className="btn" >Login</button>
       </div>
    </form>
    <div className="signupimg">
        <figure>
            <img src="./signin.svg" alt="" />
        </figure>
    </div>
    </div>
    </>
  )
  }
  
}

