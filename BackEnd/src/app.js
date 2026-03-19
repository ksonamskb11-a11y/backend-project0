// const express = require('express');
import express, { urlencoded } from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config({path:"./.env"});    // to set path from '.env' file, to access data/variables which store in this file


export const app = express();    //to create a server instance 

app.use(express.json({limit:"16kb"}));  // to convert into json format (data given by user)
app.use(urlencoded({limit:"16kb"})); // to make understand 'url-code' to backend 
app.use(cookieParser());  // instead of local storage, to prevent 'data' theft 

app.use(cors({origin:process.env.ORIGIN}));  //allows servers to specify which origins are permitted to access their resources


// import router
import healthCheckRouter from "./routes/healthCheck.route.js";
import authRouter from "./routes/auth.router.js";

// use routes
app.use("/api/v1", healthCheckRouter);
app.use("/api/v1/auth",authRouter);
