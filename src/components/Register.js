import React, { Component } from "react";
import './Register.css'
export default class Register extends Component{
    constructor(props){
        super (props);
        this.state = {
            named:"",
            email: "",
            password: "",
            captcha: "",
        };
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        const {named,email,password,captcha} = this.state;
        console.log(named,email,password,captcha);
        fetch("http://localhost:5000/register",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                named,
                email,
                password,
                captcha
            }),
        }).then((res)=> res.json())
        .then((data)=>{
            console.log(data,"userRegistered");
        });
    }
    render(){
    return(
        <>
         <div className="page">
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" placeHolder onChange={(e)=>this.setState({named: e.target.value})} />
                <label>Email</label>
                <input type="text" name="name" placeHolder onChange={(e)=> this.setState({email: e.target.value })}/>
                <label>Password</label>
                <input type="text" name="name" placeHolder onChange={(e)=> this.setState({password: e.target.value })} />
                <label>Captcha</label>
                <input type="text" name="name" placeHolder onChange={(e)=> this.setState({captcha: e.target.value })}/>
                <button className="btn" type="submit" >Register</button>
            </form>
         </div>
        </>
    )
}
}