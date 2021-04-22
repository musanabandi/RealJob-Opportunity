import applicationData from '../model/applicationModel';
import Response from '../Helpers/response';
class applyController {

    static createApplication = async (req, res) => {

        let {
            jobTitle,
            userId
        } = req.body;
        
        const timestamp = new Date(Date.now());


        const data = await applicationData.create(req.body);


        if (!data) {
            return Response.errorMessage(res,"application failed to be created", 417)
           
        }
         return Response.successMessage(res, "application created is successfull", {data},201)}

    static getAllApplication = async (req, res) => {
        
        const data = await applicationData.find();
       return Response.successMessage(res, "this is all your applications",{data}, 200)
        
    }

    static getOneApplication = async (req, res) => {
        const applicationid = req.params.id;

        const data = await applicationData.findById(applicationid);

        if (!data) {
            return Response.errorMessage(res, "there is no  one application", 417)
            
        }
        return Response.successMessage(res,"you have got one Application", {data},201)
            
    }

    static deleteOneApplication = async (req, res) => {
        const applicationid = req.params.id;
        const data = await applicationData.findByIdAndDelete(applicationid);


        if (!data) {
            return Response.errorMessage(res, "Application failed to be deleted",417)
            
        }
        return Response.successMessage(res,"deleted successfully",{data},201)
        
    }
    static updateOneApplication = async (req, res) => {
        const applicationid = req.params.id;

        let {
            jobTitle,
        } = req.body;


        
        const data = await applicationData.findByIdAndUpdate(applicationid, {
            jobTitle: jobTitle,
        });


        if (!data) {
            return Response.errorMessage(res, "update failed",{data}, 417)
            
        }



        const applicationUpdated= await applicationData.findById(applicationid)
        return Response.successMessage(res, "updated is successfully",{data},200)
        
    }
}





export default applyController;

