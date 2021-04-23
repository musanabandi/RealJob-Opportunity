import express from 'express';
import ProfileController from '../controller/profileController';
import {verifyAuth} from "../middleware/authVerification";
import validator from "../middleware/validator";


const profileRouter = express.Router();

profileRouter.post('/create',verifyAuth, ProfileController.createProfile);
profileRouter.get('/all',verifyAuth, ProfileController.getAllProfile);
profileRouter.get('/getOne/:id',verifyAuth, ProfileController.getOneProfile);
profileRouter.delete('/delete/:id',verifyAuth,validator.verifyAccess,validator.validateInput,ProfileController.deleteOneProfile);
profileRouter.patch('/update/:id',verifyAuth,validator.verifyAccess,validator.validateInput, ProfileController.updateProfile)


export default profileRouter;