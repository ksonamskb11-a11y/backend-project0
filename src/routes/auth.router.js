import { Router } from 'express';
import { registerUserHandler } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.route('/register').post(registerUserHandler);

export default authRouter;
