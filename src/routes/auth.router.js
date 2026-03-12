import { Router } from 'express';
import {
    getCurrentUserHandler,
    loginUserHandler,
    logoutUserHandler,
    registerUserHandler,
    verifyUserHandler,
    forgotPasswordRequestHandler,
    forgotPasswordHandler,
    changeCurrentPasswordHandler,
} from '../controllers/auth.controller.js';
import { validate } from '../middlewares/zod.middleware.js';
import {
    userLoginValidatorSchema,
    userRegistrationValidatorSchema,
} from '../validators/index.js';
import { verifyJwt } from '../middlewares/auth.middleware.js';

const authRouter = Router();

authRouter
    .route('/register')
    .post(validate(userRegistrationValidatorSchema), registerUserHandler);
authRouter.route('/verify-email/:rawToken').get(verifyUserHandler);
authRouter
    .route('/login')
    .post(validate(userLoginValidatorSchema), loginUserHandler);

authRouter.route('/current-user').get(verifyJwt, getCurrentUserHandler);

authRouter.route('/logout').post(verifyJwt, logoutUserHandler);
authRouter.route('/forgot-password/request').get(forgotPasswordRequestHandler);
authRouter.route('/forgot-password/:rawToken').post(forgotPasswordHandler);
authRouter
    .route('/change-password')
    .post(verifyJwt, changeCurrentPasswordHandler);

export default authRouter;
