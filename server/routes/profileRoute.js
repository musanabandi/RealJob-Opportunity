import express from 'express';
import ProfileController from '../controller/profileController';
import { verifyAuth } from "../middleware/authVerification";
import validator from "../middleware/validator";


const profileRouter = express.Router();

profileRouter.post('/profile/create', verifyAuth, validator.verifyRole('jobSeeker'), ProfileController.createProfile);
profileRouter.get('/profile', verifyAuth, ProfileController.getAllProfile);
profileRouter.get('/profile/:id', verifyAuth, ProfileController.getOneProfile);
profileRouter.delete('/profile/:id', verifyAuth, validator.verifyAccess, validator.validateInput, ProfileController.deleteOneProfile);
profileRouter.patch('/profile/:id', verifyAuth, validator.verifyAccess, validator.validateInput, ProfileController.updateProfile)


export default profileRouter;