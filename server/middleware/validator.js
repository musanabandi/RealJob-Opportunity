import { check, validationResult } from "express-validator";
import UserData from "../model/UserModel";
import Response from "../helpers/response";
import categoryInfos from "../model/categoryModal";
import profileInfos from "../model/profileModel";
import jobInfos from "../model/jobModel";
class validator {

    static checkCategory = async(req,res,next)=>{
        let {categoryId} = req.body;
 
        categoryId.forEach(async(element) => {
            
        const isCategoryExist= await categoryInfos.findById(element);

        if(!isCategoryExist){
            return Response.errorMessage(res, "Category does Not Exist", 404)

        }
        });

        
        next();

    }


    static checkProfile = async(req,res,next)=>{
        let {profileId} = req.body;

        profileId.forEach(async(element) => {
            
        const isProfileExist= await profileInfos.findById(element);

        if(!isProfileExist){
            return Response.errorMessage(res, "Profile does Not Exist", 404)

        }
        });

        
        next();

    }


    static checkJob = async(req,res,next)=>{
        let {jobId} = req.body;

        jobId.forEach(async(element) => {
            
        const isJobExist= await jobInfos.findById(element);

        if(!isJobExist){
            return Response.errorMessage(res, "Job does Not Exist", 404)

        }
        });

        
        next();

    }

    
    static verifyAccess = async (req, res, next) => {

        const userIdFromToken = req.body.userId;

      
        const profile = await UserData.findById(userIdFromToken);        
                        if (!profile) {
        
                    return Response.errorMessage(res, "Profile Not Exist", 404)
        
                }
        
        
                else if (userIdFromToken == profile._id) {
                    req.body.user = profile;
                    
               return next();
            }
        
            return Response.errorMessage(res, "You Are Not Authorised", 401)
        
                    }
        
        
        
        
            static verifyRole = function (requiredRole) {
                return async (req, res, next) => {
                    let { role } = req.body.user;
                    if (requiredRole !== role) {
                        return Response.errorMessage(res, "you don't have access to this route, please contact admin", 401)
                    }
                    next();
                }
        
            }

    static newAccountRules() {

        return [check("firstName", "FirstName must be valid").isAlpha(),
        check("lastName", "LastName must be valid").isAlpha(),
        check("gender", "gender should be male or female").isIn(["male", "female"]),
        check("address", "address must be in This country").isAlpha(),
        check("email", "Email is not Valid").isEmail(),
        check("password", "Password must be Strong").isStrongPassword(),
        check("phone", "Phone Number is not Valid").isMobilePhone(),
        check("role", "role must be user or admin").isIn(["jobSeeker", "jobProvider", "admin"]),];
    }





    static validateInput = (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            
            const errorMessage = errors.errors.map(e => e.msg);

            return Response.errorMessage(res,"errorMessage",400)

        }

        return next();
    }

}
export default validator;