import express from 'express';
import ProfileController from '../controller/profileController';

const profileRouter = express.Router();

profileRouter.post('/create', ProfileController.createProfile);
profileRouter.get('/all', ProfileController.getAllProfile);
profileRouter.get('/getOne/:id', ProfileController.getOneProfile);
profileRouter.delete('/delete/:id', ProfileController.deleteOneProfile);
profileRouter.patch('/update/:id', ProfileController.updateProfile)


export default profileRouter;