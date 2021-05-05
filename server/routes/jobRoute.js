import express from 'express';
import jobController from '../controller/jobController';

import validator from '../middleware/validator';
import { verifyAuth } from '../middleware/authVerification';


const jobRouter = express.Router();
jobRouter.post('/job/create', verifyAuth, validator.verifyRole('jobProvider'), validator.checkCategory, jobController.createjobpost);

jobRouter.get('/job', verifyAuth, jobController.getAllJob);

jobRouter.delete('/job/:id', verifyAuth, jobController.deleteJob);

jobRouter.patch('/job/:id', verifyAuth, jobController.updateJob)

jobRouter.get('/job/:id', verifyAuth, jobController.getAllApplicantsOnOneJob);
jobRouter.post("/job/admit",verifyAuth, jobController.okReplyApplicant);

jobRouter.post("/job/rejected",verifyAuth, jobController.noReplyApplicant);













































export default jobRouter;




