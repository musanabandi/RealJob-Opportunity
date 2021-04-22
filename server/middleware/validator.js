import { check, validationResult } from "express-validator";
import profileInfo from "../model/profileModel";
import Response from "../helpers/response";
class validator {

    
    static verifyAccess = async (req, res, next) => {


        const userIdFromToken = req.body.userId;
        
        const profileIdFromParams = req.params.id;
        
        const profile = await profileInfo.findById(profileIdFromParams);
        console.log(profile)
        

        if (!profile) {

            return Response.errorMessage(res,"Profile Not Exist",404)
           
        }

        else if (userIdFromToken == profile.userId) {
            
            return next();
            

        }

        return Response.errorMessage(res,"You Are Not Authorised",401)

    }
    

    static newAccountRules() {

        return [check("firstName", "FirstName must be Invalid").isAlpha(),
        check("lastName", "LastName must be Invalid").isAlpha(),
        check("gender", "gender should be male or female").isIn(["male", "female"]),
        check("address","address must be in This country").isAlpha(),
        check("email", "Email is not Valid").isEmail(),
        check("password", "Password must be Strong").isStrongPassword(),
        check("phone", "Phone Number is not Valid").isMobilePhone(),
        check("role", "role must be user or admin").isIn(["jobSeeker", "jobProvider"]),];
    }

    static newSignInRules() {

        return [check("email", "Email is not Valid").isEmail(),
         check("phone", "Phone Number is not Valid").isMobilePhone(),
        check("password", "Password must be Strong").isStrongPassword()];
    }

    

    static validateInput = (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const errorMessage = errors.errors.map(e => e.msg);

            return Response.errorMessage(res,"Error Message",400)

        }

        return next();
    }

}
export default validator;