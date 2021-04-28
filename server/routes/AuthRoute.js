import express from 'express';
import validator from '../middleware/validator';
import UserAuthantication from '../controller/UserController';
import {verifyAuth} from '../middleware/authVerification';

const router = express.Router();

router.post('/auth/signup',validator.newAccountRules(),validator.validateInput, UserAuthantication.UserAuthantication.signup);
router.post('/auth/signin', UserAuthantication.UserAuthantication.signin);
router.post('/auth/changepassword',verifyAuth, UserAuthantication.UserAuthantication.changePassword)

export default router;

