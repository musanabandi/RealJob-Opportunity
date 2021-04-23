import UserData from '../model/UserModel';
import { generateAuthToken } from "../helpers/token";
import bcrypt from "bcrypt";
import Response from "../helpers/response";


class UserAuthantication {


    static changePassword = async (req,res)=>{

        let {
            oldPassword,
            newPassword,
            confirmPassword
            
        }=req.body;

        const userId = req.body.userId;
        const userDetails = await UserData.findById(userId);
        

        if(bcrypt.compareSync(oldPassword, userDetails.password)){

            if(newPassword === confirmPassword){
 
                const password = bcrypt.hashSync(newPassword, 15);
                const passwordChangedTime = Date.now()
                const userUpdated = await UserData.findByIdAndUpdate(userId,{

                    password:password,
                    passwordChangedTime: passwordChangedTime


                })
        return Response.successMessage(res,"Password Has Changed",userUpdated,200)
            }
        return Response.errorMessage(res, "New Password And Confirm Password Not Match",404)
        }
        return Response.errorMessage(res, "Old Password Provided Is Invalid",417)

    }

    //sign up

    static signup = async (req, res) => {
      
        let {
            firstName,
            lastName,
            gender,
            address,
            email,
            password,
            phone,
            role,
            isActive
            
           

        } = req.body;


        password = bcrypt.hashSync(password, 15)

        const isEmailExist = await UserData.findOne({email:email}||{phone:phone});

        if (isEmailExist) {

           return  Response.errorMessage(res,"Email or Phone Number Is Duplicated",409) 

        }



        req.body.password= password;
        const data = await UserData.create(req.body);



        if (!data) {

            return Response.errorMessage(res,"Signup Failed",417)

           
        }

        else {
            let { password, ...userData } = data._doc;

            
         return Response.successMessage(res, "Account Created Succesfully",{userData},201)


        }


    }

    

    static signin = async (req, res) => {


        let { email, phone, password } = req.body;

        let isUserExist =await UserData.findOne({email:email});

        if(!isUserExist){

        isUserExist =await UserData.findOne({phone:phone});}


       if (isUserExist && bcrypt.compareSync(password, isUserExist.password)) {

            const data = isUserExist;



            //generating token

            const token = generateAuthToken({
                id: data.id,
                email: data.email,
                phone:data.phone,
                role: data.role,
                passwordChangedTime: data.passwordChangedTime
            });

            let { password, ...userData } = data._doc;


           return  Response.successMessage(res, " Login Created Succesfully",{token},201)

          
        }

        
        return Response.errorMessage(res,"Password User Entered Is Incorrect!",404)

    
    }

}

export default { UserAuthantication};