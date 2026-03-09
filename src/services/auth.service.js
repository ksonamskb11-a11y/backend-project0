import { StatusCodes } from 'http-status-codes';
import {
    createUser,
    findUserByEmailOrUserName,
    saveUser,
    findAllValidUsersWithValidVerificationToken,
    verifyUser
} from '../repositories/auth.repositories.js';
import { ApiError } from '../utils/api-error.js';
import { userVerificationEmailContent } from '../utils/mail.templates.js';
import { sendEmail } from './mailer.js';
import bcrypt from "bcrypt";

const registerUserService = async ({ fullName, userName, email, password }) => {
    const existingUser = await findUserByEmailOrUserName(email, userName);
    if (existingUser) {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'user already exists');
    }

    const user = await createUser({
        fullName,
        userName,
        email,
        password,
    });

    console.log('user created');

    const rawToken = await user.generateEmailVerificationToken();
    // user.emailVerificationToken = rawToken;

    await saveUser(user);

    const verificationLink = `http://localhost:${process.env.PORT}/api/v1/auth/verify-email/${rawToken}`;

    const { html } = userVerificationEmailContent({
        name: user.fullName,
        verificationLink,
    });

    await sendEmail({
        userEmail: user.email,
        subject: 'user verification email',
        html,
    });

    return user;
};

const verifyUserService = async (rawToken) => {
    if (!rawToken) {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'token not found');
    }

    const usersWithToken = await findAllValidUsersWithValidVerificationToken();
    if (!usersWithToken.length) {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'no users found');
    }

    const comparisons = await Promise.all(
        usersWithToken.map(async (user) => {
            const isMatched = await bcrypt.compare(
                rawToken,
                user.emailVerificationToken
            );
            return isMatched ? user : null;
        })
    );

    const matchedUser = comparisons.find((result) => result !== null);

     console.log(matchedUser);

    if (!matchedUser) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "invalid or expired token");
    }

    if (matchedUser.isEmailVerified) {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'email already verified');
    }

    await verifyUser(matchedUser._id);

    return {
        message: 'user verification has been done successfully',
    };
};

export { registerUserService, verifyUserService };
