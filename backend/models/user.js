import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        
    },
    email:{
        type :String,
       
        unique:true
    },
    password:{
        type:String,
       
        minlength:6
    },
    blogs:[{ type : mongoose.Types.ObjectId,ref : "Blog" }]
});

export default mongoose.model("User",userSchema);
//users naming convention in mongo as to store in plural