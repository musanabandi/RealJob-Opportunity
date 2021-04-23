import express from 'express';
import jobController from '../controller/jobController';


const jobRouter  = express.Router();
jobRouter.post('/createjobPost',jobController.createjobpost);

jobRouter.get('/getAllpostedJob/:id', jobController.getAllpostedJob);
jobRouter.delete('/deletepostedJob/:id', jobController.deleteOnepostedJob);

jobRouter.get('/getOnepostedJob/:id', jobController.getOnepostedJob);

jobRouter.patch('/updatepostedJob/:id', jobController.updatepostedJob)
















































export default jobRouter;




