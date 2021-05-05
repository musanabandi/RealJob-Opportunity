import mongoose from 'mongoose';
const applicationSchema = new mongoose.Schema(

  {

    jobId: [{
      type: mongoose.Schema.ObjectId,
      ref: "jobPost",
      required: [true, "jobId is required"]
    }],

    profileId: [{
      type: mongoose.Schema.ObjectId,
      ref: "profile",
      required: [true, "ProfileId is required"]
    }],

    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: [true, "user is required"]
    },

    timeApplication: {
      type: String,
      default:Date(Date.now())
  },


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

  this.populate({
    path: "jobId"
  })

  this.populate({
    path: "profileId"
  })

  next();
})

const applicationData = mongoose.model("application", applicationSchema);
export default applicationData;