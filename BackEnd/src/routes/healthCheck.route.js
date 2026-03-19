import e from "express";
import { healthCheck } from "../controllers/healthCheck.controller.js";

const healthCheckRouter = e.Router();

healthCheckRouter.route("/health-check").get(healthCheck);

export default healthCheckRouter;