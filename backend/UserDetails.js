const mongoose= require("mongoose");

const UserDetailstable= new mongoose.Schema(
    {
       named: String,
       email: {type: String, unique: true },
       password: String,
       captcha: String,
    },
    {
        collection: "RegisterInfo",
    }
);
mongoose.model("RegisterInfo",UserDetailstable);

