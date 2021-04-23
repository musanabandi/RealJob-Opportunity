 
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({

    categoryName: {
        
        type:String,
         required:true
         },

    description: {

        type:String, 
        require:true
    },

    
userId: {
    type: mongoose.Schema.ObjectId,

 ref: "user",

 required:[true, "user is required"]

}

})


categorySchema.pre(/^find/, function(next){

  this.populate({
      path:"userId",
      select:"firstName lastName email"
  })
  

  next();
   
});
 
const categoryInfo = mongoose.model("category",categorySchema);
export default categoryInfo;











