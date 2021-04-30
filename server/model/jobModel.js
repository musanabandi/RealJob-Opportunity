import mongoose from 'mongoose'
const jobPostSchema = new mongoose.Schema(
    {
        jobTitle: { type: String, required: [true,] },

        jobDescription: { type: String, required: true},

        categoryId: [{ type:mongoose.Schema.ObjectId,

            ref:"category",
            required:[true, "jobCategory id is required"]
            
        }],

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
            default: "received"
        },
        
        Status:{
            type:String,
            enum: ["admitted","rejected"]
        },
        

        applicants :[ {
            type: mongoose.Schema.ObjectId,
            ref:"application",
           required:[true, "applicationId is required"]
        }]        


    })



jobPostSchema.pre(/^find/, function(next){

    this.populate({
        path:"categoryId",
        select:"categoryName description -userId"
    })


    this.populate({
        path:"userId",
        select:"firstName lastName phone"
    })

  
    next();
  
  })

const jobPostData=mongoose.model("jobPost", jobPostSchema);
export default jobPostData;






 
 

