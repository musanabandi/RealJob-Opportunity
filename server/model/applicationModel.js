import mongoose from 'mongoose'
const applicationSchema = new mongoose.Schema(
  {
    jobId: { type: String}, //required: [true] },
    userId: { type:String},

        timeApplication:{ type: String },

        sendingStatus:{
          type: String,
          enum: ["pending","canceled", "received" ]
        },

        status:{
          type: String,
          enum: ["pending","canceled", "rejected","admitted" ]
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