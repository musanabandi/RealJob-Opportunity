import express from 'express';
import jobController from '../controller/jobController';

import validator from '../middleware/validator';
import { verifyAuth } from '../middleware/authVerification';


const jobRouter = express.Router();
jobRouter.post('/job/create', verifyAuth, validator.verifyRole('jobProvider'), validator.checkCategory, jobController.createjobpost);

jobRouter.get('/job', verifyAuth, jobController.getAllJob);

jobRouter.get('/job/applicant', verifyAuth, jobController.getAllapplicants);

jobRouter.delete('/job/:id', verifyAuth, jobController.deleteJob);

jobRouter.patch('/job/:id', verifyAuth, jobController.updateJob)

jobRouter.get('/job/:id', verifyAuth, jobController.getApplicants);
jobRouter.post("/job/admit", jobController.okReplyApplicant);

jobRouter.post("/job/reject", jobController.noReplyApplicant);













































export default jobRouter;




