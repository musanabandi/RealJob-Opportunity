import express from 'express';
import jobController from '../controller/jobController';

import validator from '../middleware/validator';
import {verifyAuth} from '../middleware/authVerification';


const jobRouter  = express.Router();
jobRouter.post('/createjobPost',verifyAuth, jobController.createjobpost);

jobRouter.get('/getAllpostedJob',verifyAuth, jobController.getAllpostedJob);
jobRouter.delete('/deletepostedJob/:id',verifyAuth, jobController.deleteOnepostedJob);

jobRouter.get('/getOnepostedJob/:id', verifyAuth, jobController.getOnepostedJob);

jobRouter.patch('/updatepostedJob/:id',verifyAuth, jobController.updatepostedJob)

jobRouter.get('/getAllapplication', verifyAuth, jobController.getAllpostedJob);
jobRouter.patch('/applicationstatus/:id', verifyAuth, jobController.receivedpostedJob)













































export default jobRouter;




