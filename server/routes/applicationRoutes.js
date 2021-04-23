import express from 'express';
import applyController from '../controller/applicationController';
import {verifyAuth} from "../middleware/authVerification";
import Validator from "../middleware/validator";


const applicationRoute  = express.Router();
applicationRoute .post('/createApplication',verifyAuth,Validator.verifyRole('jobSeeker'),applyController.createApplication);
applicationRoute .get('/getAllApplication',verifyAuth,applyController.getAllApplication);
applicationRoute .get('/getOneApplication/:id',verifyAuth,applyController.getOneApplication);
applicationRoute .delete('/deleteOneApplication/:id',verifyAuth,applyController.deleteOneApplication);
applicationRoute .patch('/cancel/:id',verifyAuth,Validator.verifyRole('jobSeeker'),applyController.cancelApplication);

export default applicationRoute;

//verifyAccess / validator is on delete and update and creation of apllication :
 
//verifyauth is all routes well done remain is to copy and paste on route
//
