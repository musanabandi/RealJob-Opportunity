import express from 'express';
import jobController from '../controller/jobController';

import validator from '../middleware/validator';
import { verifyAuth } from '../middleware/authVerification';


const jobRouter = express.Router();
jobRouter.post('/job/create', verifyAuth, validator.checkCategory, jobController.createjobpost);

jobRouter.get('/job', verifyAuth, jobController.getAllpostedJob);
jobRouter.delete('/job/:id', verifyAuth, jobController.deleteOnepostedJob);

jobRouter.get('/job/:id', verifyAuth, jobController.getOnepostedJob);

jobRouter.patch('/job/:id', verifyAuth, jobController.updatepostedJob)

jobRouter.get('/job/applicant', verifyAuth, jobController.getAllpostedJob);
// jobRouter.patch('/applicationstatus/:id', verifyAuth, jobController.receivedpostedJob)


jobRouter.post("/job/admit", jobController.okReplyApplicant);













































export default jobRouter;




