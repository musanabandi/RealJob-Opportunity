import categoryInfo from "../model/categoryModal";
import Response from "../helpers/response";


class CategoryController {

    static createCategory = async(req, res) => {
        
        let {
            categoryName,
            description
            
        } = req.body;
 
        const category = await categoryInfo.create(req.body);
        
        if (!category ) {


        return  Response.errorMessage(res,"Category  Failed to be Created",417) 
              
        }

        return Response.successMessage(res, "Category   Created Succesfully",{category},201)

    }




    static getOneCategory = async (req, res) => {

        const categoryId = req.params.id;

        const category = await categoryInfo.findById(categoryId )

        if (!category ) {

    return  Response.errorMessage(res,"Failed to Get One Category",417) 

        }

    return Response.successMessage(res, "Category  Created Succesfully",{category },201)

      
    }


    
    static getAllCategory = async(req, res) => {
        
        const Category = await categoryInfo.find();


    return Response.successMessage(res, "This is All Category",{Category},200)


    }

    static deleteOneCategory= async(req,res)=>{
        const categoryId= req.params.id;

        const category = await categoryInfo.findByIdAndDelete(categoryId);
        
        if (!category) {


    return  Response.errorMessage(res," Failed To Delete Category",417) 

        }

    return Response.successMessage(res, "Category Deleted Succesfully",{category},201)

    }




    static updateCategory= async (req,res)=>{

        const categoryId=req.params.id;

        let{
            categoryName,
            description
        } =req.body;

        const category= await categoryInfo.findByIdAndUpdate(categoryId, {

            categoryName: categoryName,
            description:  description
        });

     if(!category){

    return  Response.errorMessage(res,"Updated Failed",404) 

       
    }

    const categoryUpdate= await categoryInfo.findById(categoryId);
    return Response.successMessage(res, "Updated Successfully",{categoryUpdate},201)
      

        }  
}

export default CategoryController ;
