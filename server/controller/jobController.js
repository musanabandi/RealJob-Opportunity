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

    static getAllApplicantsOnOneJob = async (req, res) => {
        const jobpostId = req.params.id;

        const data = await jobPostData.findById(jobpostId);

        if (!data) {
            return Response.errorMessage(res, "There is no  one application", 417) 

        }
        return Response.successMessage(res, "These  are All applicants received on your particular job posted", { data }, 201)

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

            const message='  congratulation Dear, you are higly welcomed.';

            sendSms(userData.phone, userData.firstName, message);

        });

        return Response.successMessage(res, "admitted succefully", {message: "congratulation Dear, you are higly welcomed."}, 201)

    }



    static noReplyApplicant = async (req, res) => {
        const { applicationId } = req.body;

        applicationId.forEach(async (applyId) => {

            await applicationInfo.findByIdAndUpdate(applyId, {
                sendingStatus: "received",
                status: "rejected"
            })
            const applicationsData = await applicationInfo.findById(applyId);

            const usersData = await userInfo.findById(applicationsData.userId);

            const message='  congratulation Dear, you did it well, you will try other opportunity.';

            sendSms(usersData.phone, usersData.firstName, message);

        });

        return Response.successMessage(res, "You are Rejected", { message: "Sorry you have to try other Opportunity" }, 201)

    }
}
export default jobController;
