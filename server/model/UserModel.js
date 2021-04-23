import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,

    gender: {
        type: String,
        enum: ["male", "female"]
    },
  
    address: {type:String,
    },
    
    email: {
        type: String},


    password: {
        type: String,
        required: [true, "password is required"]
    },

    phone: {
        type: String },

   
    role: {
        type: String,
        enum: ["jobSeeker", "jobProvider"],

        required:[true, "role is required"],
        default:"jobSeeker"
    },

    profileId: {type: mongoose.Schema.ObjectId,

        ref: "profile",
    
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


