import { StatusCodes } from 'http-status-codes';
import { ApiError } from '../utils/api-error.js';
import { registerUserService } from '../services/auth.service.js';
import { ApiResponse } from '../utils/api-response.js';
import { findUserById } from "../repositories/auth.repositories.js";

const registerUserHandler = async (req, res) => {
    try {
        const { fullName, userName, email, password } = req.body;
        if (!fullName || !userName || !email || !password) {
            throw new ApiError(
                StatusCodes.BAD_REQUEST,
                'all fields are required'
            );
        }

        const user = await registerUserService({
            fullName,
            userName,
            email,
            password,
        });

        const createdUser = await findUserById(user._id);

        if (!createdUser) {
           throw new ApiError(404,"user not found after registration");
        }

        return res
            .status(StatusCodes.OK)
            .json(
                new ApiResponse(
                    StatusCodes.OK,
                    createdUser,
                    "user created successfully and a verification mail is sent to the user's email"
                )
            );
    } catch (error) {
        console.log(error, 'error in register user handler');
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error);
    }
};

export { registerUserHandler };
