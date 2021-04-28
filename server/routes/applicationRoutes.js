import express from 'express';
import applyController from '../controller/applicationController';
import {verifyAuth} from "../middleware/authVerification";
import Validator from "../middleware/validator";


const applicationRoute  = express.Router();
applicationRoute .post('/application/create',verifyAuth,Validator.verifyRole('jobSeeker'),applyController.createApplication);
applicationRoute .get('/application',verifyAuth,applyController.getAllApplication);
applicationRoute .get('/application/:id',verifyAuth,applyController.getOneApplication);
applicationRoute .delete('/application/:id',verifyAuth,applyController.deleteOneApplication);
applicationRoute .patch('/application/:id',verifyAuth,Validator.verifyRole('jobSeeker'),applyController.cancelApplication);

export default applicationRoute;


