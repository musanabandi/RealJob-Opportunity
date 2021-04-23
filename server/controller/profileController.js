import profileInfo from "../model/profileModel";
import Response from "../helpers/response";


class ProfileController {

    static createProfile = async(req, res) => {
        
        let {
            profilePicture,
            portifolio,
            socialMediasLink
            
            
        } = req.body;
 
        const profile = await profileInfo.create(req.body);
        
        if (!profile ) {


        return  Response.errorMessage(res,"Profile  Failed to be Created",417) 
              
        }

        return Response.successMessage(res, "Profile   Created Succesfully",{profile},201)

    }




    static getOneProfile = async (req, res) => {

        const profileId = req.params.id;

        const profile = await profileInfo.findById(profileId )

        if (!profile ) {

    return  Response.errorMessage(res,"Failed to Get One Profile",417) 

        }

    return Response.successMessage(res, "Profile  Created Succesfully",{profile },201)

      
    }


    
    static getAllProfile = async(req, res) => {
        
        const profile = await profileInfo.find();


    return Response.successMessage(res, "This is All Profile",{profile},200)


    }

    static deleteOneProfile= async(req,res)=>{
        const profileId= req.params.id;

        const profile = await profileInfo.findByIdAndDelete(profileId);
        
        if (!profile) {


    return  Response.errorMessage(res," Failed To Delete Profile",417) 

        }

    return Response.successMessage(res, "Profile Deleted Succesfully",{profile},201)

    }




    static updateProfile= async (req,res)=>{

        const profileId=req.params.id;

        let{
            profilePicture,
            portifolio,
            socialMediasLink
        } =req.body;

        const profile= await profileInfo.findByIdAndUpdate(profileId, {

            profilePicture:  profilePicture,
            portifolio:  portifolio,
            socialMediasLink:  socialMediasLink
        });

     if(!profile){

    return  Response.errorMessage(res,"Updated Failed",404) 

       
    }

    const profileUpdate= await profileInfo.findById(profileId);
    return Response.successMessage(res, "Updated Successfully",{profileUpdate},201)
      

        }                                         
}

export default ProfileController ;
