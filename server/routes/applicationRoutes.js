import express from 'express';
import applyController from '../controller/applicationController';
import {verifyAuth} from "../middleware/authVerification";
import validator from "../middleware/validator";


const applicationRoute  = express.Router();
applicationRoute .post('/application/create',verifyAuth, validator.checkProfile, validator.checkJob ,validator.verifyRole('jobSeeker'),applyController.createApplication);
applicationRoute .get('/applications',verifyAuth,applyController.getAllApplication);
applicationRoute .get('/myapplication',verifyAuth,applyController.getMyApplication);
applicationRoute .get('/application/:id',verifyAuth,applyController.getOneApplication);
applicationRoute .delete('/application/:id',verifyAuth,applyController.deleteOneApplication);
applicationRoute .patch('/application/:id',verifyAuth ,applyController.cancelApplication);

export default applicationRoute;


