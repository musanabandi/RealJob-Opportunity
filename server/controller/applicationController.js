import applicationData from '../model/applicationModel';
import Response from '../helpers/response';
import jobPostData from '../model/jobModel';
class applyController {

    static createApplication = async (req, res) => {

        const data = await applicationData.create(req.body);
        if (!data) {
            return Response.errorMessage(res, "application failed to be created", 417)
        }



        let { jobId } = req.body;

        const jobApplicant = await jobPostData.findByIdAndUpdate(jobId,
            {
                $push: {
                    applicants: data._id
                }
            })


        return Response.successMessage(res, "application created is successfull", { data }, 201)
    }


static getOneApplication = async (req, res) => {

    const applicationId = req.params.id;

    const application = await applicationData.findById(applicationId)

    if (!application ) {

return  Response.errorMessage(res,"Failed to Get One application",417) 

    }

return Response.successMessage(res, "Application  Created Succesfully",{application },201)

  
}

// get all application

static getAllApplication = async(req, res) => {
    
    const application = await applicationData.find();


return Response.successMessage(res, "These are All Applications",{application},200)


}



    static getMyApplication = async (req, res) => {

        const userId = req.body.userId;
        
        const data = await applicationData.find({ userId: userId });
        return Response.successMessage(res, "These are all my applications", { data }, 200)

    }

    

    static deleteOneApplication = async (req, res) => {
        const applicationId = req.params.id;
        const data = await applicationData.findByIdAndDelete(applicationId);


        if (!data) {
            return Response.errorMessage(res, "Application failed to be deleted", 417)

        }
        return Response.successMessage(res, "deleted successfully", { data }, 201)

    }


    static cancelApplication = async (req, res) => {
        const applicationId = req.params.id;

        let {
            jobTitle
        } = req.body;



        const data = await applicationData.findByIdAndUpdate(applicationId, {
            sendingStatus: 'canceled',
            status: 'canceled'

        });


        if (!data) {
            return Response.errorMessage(res, "cancel failed", { data }, 417)

        }



        const applicationUpdated = await applicationData.findById(applicationId)
        return Response.successMessage(res, "cancel is successfully", { data }, 200)

    }
}





export default applyController;

