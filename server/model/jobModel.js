import mongoose from 'mongoose'
const jobPostSchema = new mongoose.Schema(
    {
        jobTitle: { type: String, required: [true,] },

        jobDescription: { type: String, required: true},

        categoryId: { type:mongoose.Schema.ObjectId,

            ref:"category",
            required:[true, "jobCategory id is required"]
            
        },

        userId: { type:mongoose.Schema.ObjectId,
            ref:"user",
           required:[true, "userId is required"]
            
            
        },
        postedTime: {
            type: String,
            default: Date.now()
        },
        postedDeadLine: {
            type: String,
            default: Date.now()
        },
        isActive: {
            type: String
        },

        receivedStatus:{
            type:String,
            enum: ["received"]
        },
        Status:{
            type:String,
            enum: ["admitted","rejected"]
        },
        

        applicants :[ {
            type: mongoose.Schema.ObjectId,
            ref:"application",
           required:[true, "applicationId is required"]
        }],
        

        /*applicationId : {
            type: mongoose.Schema.ObjectId,
            ref:"application",
           required:[true, "applicationId is required"]
        },*/


        profileId : {
            type: mongoose.Schema.ObjectId,
            ref:"profile",
           required:[true, "profileId is required"]
        }

    }
);

const jobPostData=mongoose.model("jobPost", jobPostSchema);
export default jobPostData;






 
 

