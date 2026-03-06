import { Router } from 'express';
import { registerUserHandler } from '../controllers/auth.controller.js';
import { validate } from "../middlewares/zod.middleware.js";
import { userRegistrationValidatorSchema } from "../validators/index.js";

const authRouter = Router();

authRouter.route('/register').post(validate(userRegistrationValidatorSchema),registerUserHandler);

export default authRouter;
