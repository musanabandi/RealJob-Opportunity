import mongoose from 'mongoose'
const applicationSchema = new mongoose.Schema(
  {
    jobId: { type: String}, //required: [true] },
    userId: { type:String,
      ref:"user",
      required:[true,"user is required"]
    },

        timeApplication:{ type: String },

        sendingStatus:{
          type: String,
          enum: ["pending","canceled", "received" ],
          default:'pending',
          updated:'canceled'
        },

        status:{
          type: String,
          enum: ["pending","canceled", "rejected","admitted" ],
          default:'pending',
          updated:'canceled'
        }

    })
applicationSchema.pre(/^find/,function(next){
  this.populate({
      path:"applicationId", //==userId = applicationId
      select:"firstName email telephone"
  })
  next();
})






const applicationData=mongoose.model("application", applicationSchema);
export default applicationData;