import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,

    gender: {
        type: String,
        enum: ["male", "female"]
    },
  
<<<<<<< HEAD
    address: {type:String},
=======
    address: {type:String,
    },
>>>>>>> ac121ceeba204325b56f7e79527b6b15c15a2165
    
    email: {
        type: String},


    password: {
        type: String,
        required: [true, "password is required"]
    },

    phone: {
        type: Number },

   
    role: {
        type: String,
        enum: ["jobSeeker", "jobProvider", "admin"],

        required:[true, "role is required"],
        default:"jobSeeker" 
    },

     isActive:{
         type:Boolean,
         default:true,
         required:[true,"isActive or Not"]

     } ,
     
    passwordChangedTime:{

        type:String,
        default:Date.now()
    }
});

const UserData = mongoose.model("user",userSchema);

export default UserData;


