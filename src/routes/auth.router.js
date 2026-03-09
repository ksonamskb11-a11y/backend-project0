import { Router } from 'express';
import {
    loginUserHandler,
    registerUserHandler,
    verifyUserHandler,
} from '../controllers/auth.controller.js';
import { validate } from '../middlewares/zod.middleware.js';
import {
    userLoginValidatorSchema,
    userRegistrationValidatorSchema,
} from '../validators/index.js';

const authRouter = Router();

authRouter
    .route('/register')
    .post(validate(userRegistrationValidatorSchema), registerUserHandler);
authRouter.route('/verify-email/:rawToken').get(verifyUserHandler);
authRouter
    .route('/login')
    .post(validate(userLoginValidatorSchema), loginUserHandler);

export default authRouter;
