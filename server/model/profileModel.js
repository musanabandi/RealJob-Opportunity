 
import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  profilePicture: {type:String, require:true},

  portifolio: {type:String, require:true},
    
   socialMediasLink:{

     twitter:{type:String },
     facebook:{type:String},
     instagram:{type:String},
     telegram:{type:String},
     whatsapp:{type:String}

   } 

});
 
const profileInfo = mongoose.model("profile",profileSchema);
export default profileInfo;

