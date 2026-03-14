import { Router } from 'express';
import {
    getCurrentUserHandler,
    loginUserHandler,
    logoutUserHandler,
    registerUserHandler,
    verifyUserHandler,
    forgotPasswordRequestHandler,
    resetForgotPasswordHandler,
    changeCurrentPasswordHandler,
    resendVerificationEmailHandler,
} from '../controllers/auth.controller.js';
import { validate } from '../middlewares/zod.middleware.js';
import {
    userLoginValidatorSchema,
    userRegistrationValidatorSchema,
    changePasswordValidatorSchema,
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

// secure routes
authRouter.route('/current-user').get(verifyJwt, getCurrentUserHandler);
authRouter.route('/logout').post(verifyJwt, logoutUserHandler);
authRouter.route('/forgot-password/request').get(forgotPasswordRequestHandler);
authRouter.route('/reset-forgot-password/:rawToken').post(resetForgotPasswordHandler, validate(changePasswordValidatorSchema));
authRouter
    .route('/change-password')
    .post(verifyJwt, changeCurrentPasswordHandler, validate(changePasswordValidatorSchema));

authRouter.route('/resend-email-verification').post( verifyJwt, resendVerificationEmailHandler);     

export default authRouter;
