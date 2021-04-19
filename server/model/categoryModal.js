 
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    categoryName: {type:String, required:true },

    description: {type:String, require:true}  
});
 
const categoryInfo = mongoose.model("category",categorySchema);
export default categoryInfo;











