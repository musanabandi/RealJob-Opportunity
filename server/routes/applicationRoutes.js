import express from 'express';
import applicationController from '../controller/applicationController';
import Validator from "../middleware/validator";


const router  = express.Router();
router.post('/application/createApplication',applicationController.createApplication);


export default router;