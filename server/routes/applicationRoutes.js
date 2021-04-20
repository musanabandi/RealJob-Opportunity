import express from 'express';
import applyController from '../controller/applicationController';
//import Validator from "../middleware/validator";


const applicationRoute  = express.Router();
applicationRoute .post('/application/createApplication',applyController.createApplication);
applicationRoute .get('/application/getAllApplication/:id',applyController.getAllApplication);
applicationRoute .get('/application/getOneApplication/:id',applyController.getOneApplication);
applicationRoute .delete('/application/deleteOneApplication/:id',applyController.deleteOneApplication);
applicationRoute .patch('/application/updateOneApplication/:id',applyController.updateOneApplication);


export default applicationRoute;