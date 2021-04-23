import mongoose from 'mongoose'
const applicationSchema = new mongoose.Schema(
  {
    jobId: { type: String }, //required: [true] },
    userId: {
      type: String,
      ref: "user",
      required: [true, "user is required"]
    },

    timeApplication: { type: String },

    sendingStatus: {
      type: String,
      enum: ["pending", "canceled", "received"],
      default: 'pending'
    },

    status: {
      type: String,
      enum: ["pending", "canceled", "rejected", "admitted"],
      default: 'pending'
    }

  })
applicationSchema.pre(/^find/, function (next) {
  this.populate({
    path: "userId",
    select: "firstName email telephone"
  })
  next();
})






const applicationData = mongoose.model("application", applicationSchema);
export default applicationData;