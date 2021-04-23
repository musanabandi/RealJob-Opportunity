import { check, validationResult } from "express-validator";
<<<<<<< HEAD
import UserData from "../model/UserModel";
=======
import UserData from "../model/UserModel.js";
>>>>>>> ac121ceeba204325b56f7e79527b6b15c15a2165
import Response from "../helpers/response";
class validator {

    
    static verifyAccess = async (req, res, next) => {


        const userIdFromToken = req.body.userId;
        
<<<<<<< HEAD
        
=======
      
        
        const profile = await UserData.findById(userIdFromToken);
        console.log(profile)
>>>>>>> ac121ceeba204325b56f7e79527b6b15c15a2165
        
        const profile = await UserData.findById(userIdFromToken);
        
        console.log(profile )

        if (!profile) {

            return Response.errorMessage(res,"Profile Not Exist",404)
           
        }

<<<<<<< HEAD
        else if (userIdFromToken == profile._id) {
            req.body.user =profile;
            
=======
        else if (userIdFromToken == profile.userId) {


            req.body.user= profile;
>>>>>>> ac121ceeba204325b56f7e79527b6b15c15a2165
            return next();
               

        }

        return Response.errorMessage(res,"You Are Not Authorised",401)

    }

<<<<<<< HEAD

static verifyRole = function(requiredRole){

    return async (req,res,next)=>{

        let{role}=req.body.user;

        if(requiredRole !== role){

    return Response.errorMessage(res, "You Don't Have Access To This Route, Please Contact Admin",401)
        }
        next();
    }
}

=======
static verifyRole =function(requiredRole){
    return async(req,res,next)=>{
   let {role }=req.body.user;
   if(requiredRole !== role){
       return Response.errorMessage(res, "you don't have access to this route, please contact admin",401)
   }
   next();
    }

}


>>>>>>> ac121ceeba204325b56f7e79527b6b15c15a2165
    

    static newAccountRules() {

        return [check("firstName", "FirstName must be Invalid").isAlpha(),
        check("lastName", "LastName must be Invalid").isAlpha(),
        check("gender", "gender should be male or female").isIn(["male", "female"]),
        check("address","address must be in This country").isAlpha(),
        check("email", "Email is not Valid").isEmail(),
        check("password", "Password must be Strong").isStrongPassword(),
        check("phone", "Phone Number is not Valid").isMobilePhone(),
        check("role", "role must be user or admin").isIn(["jobSeeker", "jobProvider","admin"]),];
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

            return Response.errorMessage(res,errorMessage,400)

        }

        return next();
    }

}
export default validator;