import mongoose from 'mongoose'
const applicationSchema = new mongoose.Schema(
  {

    jobId: {
      type: mongoose.Schema.ObjectId,
      ref: "jobPost",
      required: [true, "jobId is required"]
    },

    userId: {
      type: mongoose.Schema.ObjectId,
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
  }).populate({
    path:"jobId"
  })
  next();
})

const applicationData = mongoose.model("application", applicationSchema);
export default applicationData;