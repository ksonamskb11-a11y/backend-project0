import { Router } from 'express';
import {
    registerUserHandler,
    verifyUserHandler,
} from '../controllers/auth.controller.js';
import { validate } from '../middlewares/zod.middleware.js';
import { userRegistrationValidatorSchema } from '../validators/index.js';

const authRouter = Router();

authRouter
    .route('/register')
    .post(validate(userRegistrationValidatorSchema), registerUserHandler);
authRouter.route('/verify-email/:rawToken').get(verifyUserHandler);

export default authRouter;
