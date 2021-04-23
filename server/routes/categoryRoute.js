import express from 'express';
import CategoryController from '../controller/categoryController';
import validator from '../middleware/validator';
import {verifyAuth} from '../middleware/authVerification';

const categoryRouter = express.Router();

categoryRouter.post('/create',verifyAuth,validator.verifyRole('jobSeeker'), CategoryController.createCategory);
categoryRouter.get('/all',verifyAuth, CategoryController.getAllCategory);
categoryRouter.get('/getOne/:id',verifyAuth, CategoryController.getOneCategory);
categoryRouter.delete('/delete/:id',verifyAuth, CategoryController.deleteOneCategory);
categoryRouter.patch('/update/:id',verifyAuth, CategoryController.updateCategory)


export default categoryRouter;

