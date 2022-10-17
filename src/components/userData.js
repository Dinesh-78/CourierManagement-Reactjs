import React from "react";
import { Component } from "react";
export default class Data extends Component{
    constructor(props){
        super(props);
        this.state = {
            userData: "",
        };
    }
    componentDidMount(){
        fetch("http://localhost:5000/userData",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
               tokenn: window.localStorage.getItem("tokenn"),
            }),
        }).then((res)=> res.json())
        .then((data)=>{
            console.log(data,"userData");
            this.setState({userData: data.data});
        });
    }
    render(){
        return(
            <div>
                Name <h1>{this.state.userData.named}</h1>
                Email <h1>{this.state.userData.email}</h1>
            </div>
        );
    }
}