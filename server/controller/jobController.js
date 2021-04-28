import jobPostData from '../model/jobModel';
import applicationData from '../model/applicationModel'
import Response from "../helpers/response";



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
            return Response.errorMessage(res,"jobPost failed to be created", 417)
        }
         return Response.successMessage(res, "jobPost created is successfull",{data},201)
  
  }
      
  static getAllpostedJob = async(req, res) => {
      const jobpostId=req.body.jobpostId;
      const data = await jobPostData.find({jobpostId:jobpostId});

return Response.successMessage(res, "This is All posted jobs",{data},200)
};


static getAllapplicants = async(req, res) => {
    const applicationId=req.body.applicationId;
    const data = await jobPostData.find({applicationId:applicationId});

return Response.successMessage(res, "This is All application received ",{data},200)
}



    static deleteOnepostedJob= async(req,res)=>{
        const jobPostId= req.params.id;

        const data = await jobPostData.findByIdAndDelete(jobPostId);
        
        if (!data) {


    return  Response.errorMessage(res," Failed To Delete posted job",417) 

        }

    return Response.successMessage(res, "posted job  Deleted Succesfully",{jobPostId},201)

    }

    static updatepostedJob= async (req,res)=>{

        const jobPostId=req.params.id;

        let{
            jobTitle,
            jobDescription,
            isActive
     } =req.body;

        const data= await jobPostData.findByIdAndUpdate(jobPostId, {
            jobTitle :jobTitle,
            jobDescription:jobDescription,
            isActive:isActive
            
        });

     if(!data){

    return  Response.errorMessage(res,"Updated Failed",404) 

       
    }

    const jobPostUpdate= await jobPostData.findById(jobPostId);
    return Response.successMessage(res, "Updated Successfully",{jobPostUpdate},201)
      

        }  
     
        static getOnepostedJob = async (req, res) => {

            const jobPostId = req.params.id;
    
            const data = await jobPostData.findById(jobPostId )
    
            if (!data ) {
    
        return  Response.errorMessage(res,"Failed to Get One jobPost",417) 
    
            }
    
        return Response.successMessage(res, "Get one jobPost Succesfully",{data },201)
    
          
        }
    


        static receivedpostedJob= async (req,res)=>{

            const applicationId=req.params.id;
    
            let{
                jobTitle
            } =req.body;
    
            const data= await applicationData.findByIdAndUpdate(applicationId, {
                receivedStatus:'received',
                Status:'admitted',
                status:'rejected'
});
    
         if(!data){
    
        return  Response.errorMessage(res,"you are rejected",404) 
    
           
        }
    
        const jobPostUpdate= await jobPostData.findById(applicationId);
        return Response.successMessage(res, "you are admitted",{data},201)
          
    
            } 
        }
export default jobController;
