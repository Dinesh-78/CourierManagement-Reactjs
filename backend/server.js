const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json())
const cors = require("cors");
app.use(cors());
const bcrypt=require("bcryptjs");
const token=require("jsonwebtoken");

const token_key="wjdkwwejcjc()123";





const mongoUrl="mongodb+srv://dinesh:dinesh@cluster0.0kewm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
}).then(()=>{
    console.log("Conntected");
})
.catch((e) =>{
    console.log(e);
})

require("./UserDetails");

const User = mongoose.model("RegisterInfo");

app.post("/register",async(req,res) =>{
    const {named,email,password,captcha} = req.body;
    const encryptpass=await bcrypt.hash(password,10);
    try{
        const olduser=await User.findOne({email});
        if(olduser){
            return res.json({ error: "User Exists"});
        }
      await User.create({
        named,
        email,
        password: encryptpass,
        captcha,
      });
      res.send({status:"Ok"});
      
    } 
    catch(e){
       res.send({ status:"ERROR"});
    }
});

app.post("/login",async(req,res)=>{
    const {email, password}=req.body;

    const user=await User.findOne({email});
    if(!user){
        return res.json({ error: "Please create Account"});
    }
    if(await bcrypt.compare(password,user.password)){
        const jtoken=token.sign({email:user.email},token_key);
        if(res.status(201)){
           return res.json({status: "ok",data: jtoken}); 
        } else{
            return res.json({ error: "error"});
        }
        
    }
    res.json({status:"error",error:"Invalid Password"});
});

app.post("/userData",async(req, res)=>{
    const {tokenn}=req.body;
    try{
        const user=token.verify(tokenn,jtoken);
        console.log(user);
        const usermail=user.email
        User.findOne({ email: usermail}).then((data)=>{
            res.send({ status:"OK",data: data});
        }).catch((error)=>{
            res.send({status:"error",data:error});
        });

    }
    catch(error) {}
});


app.listen(5000,()=>{
    console.log("Server successFully started")
});
/*
app.post("/post",async(req,res) =>{
    console.log(req.body);
    const { data }=req.body;
    
    try{
        if(data == "dines"){
             res.send({status:"ok"});
        }else{
            res.send({status:"User not present"});
        }
    }
        catch(error){
            res.send({status:"Something Error"});
        }
    
});

require("./UserDetails");
const User =mongoose.model("RegisterInfo");
app.post("/register",async(req,res)=>{
    const {named,email,password,captcha} = req.body;
    try {
      await User.create({
        named,
        email,
        password,
      });
      res.send({status:"Ok"}) 
    } catch (error) {
        res.send({status:"ERROR"})
    }
}); */
