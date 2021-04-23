import mongoose from 'mongoose'
const jobPostSchema = new mongoose.Schema(
    {
        jobTitle: { type: String, required: [true,] },
        jobDescription: { type: String, required: true},
        categoryId: { type:String,
            required:[true,]
        },

        userId: { type:String,
            
            
        },
        postedTime: {
            type: String
        },
        postedDeadLine: {
            type: String
        },
        isActive: {
            type: String
        },

        applicationId : { type:String
            
        },

    }
);

const jobPostData=mongoose.model("jobPost", jobPostSchema);
export default jobPostData;







 

