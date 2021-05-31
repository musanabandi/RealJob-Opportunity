import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,

    gender: {
        type: String,
        enum: ["male", "female"]
    },

    address: { type: String },

    email: {
        type: String
    },


    password: {
        type: String,
        required: [true, "password is required"]
    },

    confirmPassword: {
        type: String,
        required: [true, "Confirm Password is Required"]
    },

    phone: {
        type: String
    },


    role: {
        type: String,
        enum: ["jobSeeker", "jobProvider", "admin"],

        required: [true, "role is required"],
        default: "jobSeeker"
    },

    country: {
        type: String,
        required: [true, "Country is required"]
    },

    // isActive: {
    //     type: Boolean,
    //     default: true,
    //     required: [true, "isActive or Not"]

    // },

    passwordChangedTime: {

        type: String,
        default: Date(Date.now())
    }

    
});

const UserData = mongoose.model("user", userSchema);

export default UserData;


