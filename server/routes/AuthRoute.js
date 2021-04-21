import express from 'express';
import validator from '../middleware/validator';
import UserAuthantication from '../controller/UserController';
import {verifyAuth} from '../middleware/authVerification';

const router = express.Router();

router.post('/Auth/Signup',validator.newAccountRules(),validator.validateInput, UserAuthantication.UserAuthantication.signup);
router.post('/Auth/Signin', UserAuthantication.UserAuthantication.signin);
router.post('/Auth/Change-password',verifyAuth, UserAuthantication.UserAuthantication.changePassword)

export default router;

