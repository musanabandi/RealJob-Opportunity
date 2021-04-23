import {dataFromToken} from "../helpers/token";
import UserData from "../model/UserModel";
import Response from "../helpers/response";

export const verifyAuth =async (req,res,next)=>{

    const token = req.header("x-auth-token");

    if(!token){


        return Response.errorMessage(res,"No Token Provided",404)

      
    }

    try{

        const user = dataFromToken(token).payload;
        const data = await UserData.findById(user.id);
    
        if(!data){

            return Response.errorMessage(res,"Please Provide True Credentials",404)

           
        }

        if(user.passwordChangedTime != data.passwordChangedTime){
            return Response.errorMessage(res,"Please Re_Login, Password Has Been Changed",404);
        }
    
        
        req.body.userId =user.id;

        req.body.user =user;
    
    req.body.user= data;

         return next();
    
    
    }catch(e)
    
    {
        console.log(e)

        return Response.errorMessage(res,"Invalid Token",404)

       
    }

}