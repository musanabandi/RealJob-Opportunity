import express from 'express';
import CategoryController from '../controller/categoryController';

const categoryRouter = express.Router();

categoryRouter.post('/create', CategoryController.createCategory);
categoryRouter.get('/all', CategoryController.getAllCategory);
categoryRouter.get('/getOne/:id', CategoryController.getOneCategory);
categoryRouter.delete('/delete/:id', CategoryController.deleteOneCategory);
categoryRouter.patch('/update:id', CategoryController.updateCategory)


export default categoryRouter;

