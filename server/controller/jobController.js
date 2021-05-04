import jobPostData from '../model/jobModel';
import Response from "../helpers/response";
import applicationInfo from "../model/applicationModel";
import userInfo from "../model/UserModel";
import sendSms from "../helpers/sms";



class jobController {


    static createjobpost = async (req, res) => {
        let {
            jobTitle,
            jobDescription,
            isActive
        } = req.body;
        const postedTime = new Date(Date.now());

        const postedDeadLineTime = new Date(Date.now());
        const data = await jobPostData.create(req.body);

        if (!data) {
            return Response.errorMessage(res, "jobPost failed to be created", 417)
        }
        return Response.successMessage(res, "jobPost created is successfull", { data }, 201)

    }


    static getAllJob = async (req, res) => {
        const data = await jobPostData.find();

        return Response.successMessage(res, "This is All posted jobs", { data }, 200)
    };


    static getOneJob = async (req, res) => {

        const jobId = req.params.id;

        const job = await jobPostData.findById(jobId )

        if (!job ) {

    return  Response.errorMessage(res,"Failed to Get One Job",417) 

        }

    return Response.successMessage(res, "this is One Job ",{job },201)

      
    }



    static getAllapplicants = async (req, res) => {
        const applicationId = req.body.applicationId;
        const data = await jobPostData.find({ applicationId: applicationId });

        return Response.successMessage(res, "These are All applications received ", { data }, 200)
    }


    static getApplicants = async (req, res) => {
        const jobpostId = req.params.id;

        const data = await jobPostData.findById(jobpostId);

        if (!data) {
            return Response.errorMessage(res, "There is no  one application", 417)

        }
        return Response.successMessage(res, "These  are All applicants received on yr particular job posted", { data }, 201)

    }



    static deleteJob = async (req, res) => {
        const jobPostId = req.params.id;

        const data = await jobPostData.findByIdAndDelete(jobPostId);

        if (!data) {

            return Response.errorMessage(res, " Failed To Delete posted job", 417)

        }

        return Response.successMessage(res, "posted job  Deleted Succesfully", { jobPostId }, 201)

    }



    static updateJob = async (req, res) => {

        const jobPostId = req.params.id;

        let {
            jobTitle,
            jobDescription,
            isActive
        } = req.body;

        const data = await jobPostData.findByIdAndUpdate(jobPostId, {
            jobTitle: jobTitle,
            jobDescription: jobDescription,
            isActive: isActive

        });

        if (!data) {

            return Response.errorMessage(res, "Updated Failed", 404)


        }

        const jobPostUpdate = await jobPostData.findById(jobPostId);
        return Response.successMessage(res, "Updated Successfully", { jobPostUpdate }, 201)
    }



    static okReplyApplicant = async (req, res) => {
        const { applicationId } = req.body;

        console.log(applicationId);

        applicationId.forEach(async (appId) => {

            await applicationInfo.findByIdAndUpdate(appId, {
                
                sendingStatus: "received",
                status: "admitted"
            })
            const applicationData = await applicationInfo.findById(appId);

            const userData = await userInfo.findById(applicationData.userId);

            sendSms(userData.phone, userData.firstName);

        });

        return Response.successMessage(res, "admitted succefully", { data: "congratulation Dear, you are higly welcomed." }, 201)

    }



    static noReplyApplicant = async (req, res) => {
        const { applicationId } = req.body;

        applicationId.forEach(async (applyId) => {

            await applicationinfo.findByIdAndUpdate(applyId, {
                sendingStatus: "received",
                status: "rejected"
            })
            const applicationsData = await applicationinfo.findById(applyId);

            const usersData = await userInfo.findById(applicationsData.userId);

            sendSms(usersData.phone, usersData.firstName);

        });

        return Response.successMessage(res, "You are Rejected", { data: "Sorry you have to try other Opportunity" }, 201)

    }
}
export default jobController;
