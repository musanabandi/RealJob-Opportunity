 
import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  profilePicture: {type:String, require:true},

  portifolio: {type:String, require:true},
    
   socialMediasLink: {type:String },
   
   userId: {
    type: mongoose.Schema.ObjectId,

 ref: "user",

 required:[true, "user is required"]

},

});
 
const profileInfo = mongoose.model("profile",profileSchema);
export default profileInfo;

