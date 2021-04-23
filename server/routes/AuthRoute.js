import express from 'express';
import validator from '../middleware/validator';
import UserAuthantication from '../controller/UserController';
import {verifyAuth} from '../middleware/authVerification';

const router = express.Router();

router.post('/Auth/Signup',validator.newAccountRules(),validator.validateInput, UserAuthantication.UserAuthantication.signup);
router.post('/Auth/Signin',validator.validateInput, UserAuthantication.UserAuthantication.signin);
router.post('/Auth/Changepassword',verifyAuth, UserAuthantication.UserAuthantication.changePassword)

export default router;

