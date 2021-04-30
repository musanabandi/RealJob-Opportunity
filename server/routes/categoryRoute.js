import express from 'express';
import CategoryController from '../controller/categoryController';
import validator from '../middleware/validator';
import {verifyAuth} from '../middleware/authVerification';

const categoryRouter = express.Router();

categoryRouter.post('/category/create',verifyAuth, validator.verifyRole('jobProvider'), CategoryController.createCategory);
categoryRouter.get('/category',verifyAuth, CategoryController.getAllCategory);
categoryRouter.get('/category/:id',verifyAuth, CategoryController.getOneCategory);
categoryRouter.delete('/category/:id',verifyAuth, CategoryController.deleteOneCategory);
categoryRouter.patch('/category/:id',verifyAuth, CategoryController.updateCategory)


export default categoryRouter;

