import { StatusCodes } from 'http-status-codes';
import {
    createUser,
    findUserByEmailOrUserName,
    findUserByEmail,
    findUserById,
    saveUser,
    findAllValidUsersWithValidVerificationToken,
    verifyUser,
    logout,
} from '../repositories/auth.repositories.js';
import { ApiError } from '../utils/api-error.js';
import { userVerificationEmailContent } from '../utils/mail.templates.js';
import { sendEmail } from './mailer.js';
import bcrypt from 'bcrypt';

const generateATandRt = async (userId) => {
    const user = await findUserById(userId);
    if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, 'user not found');
    }
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    return {
        accessToken,
        refreshToken,
    };
};

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
    console.log(usersWithToken);

    if (!usersWithToken.length) {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'no users found');
    }

    const comparisons = await Promise.all(
        usersWithToken.map(async (user) => {
            const isMatched = await bcrypt.compare(
                rawToken,
                user.emailVerificationToken
            );
            console.log(
                `user.emailVerificationToken:`,
                user.emailVerificationToken
            );
            console.log(`rawToken:                  :`, rawToken);
            console.log(`isMatched:`, isMatched);
            //      console.log(`user/usersWithToken: `,user);
            return isMatched ? user : null;
        })
    );

    //const matchedUser = comparisons.find((user) => user !== null);
    // const matchedUser = comparisons.find(Boolean);
    const matchedUser = comparisons.filter(Boolean)[0];

    console.log('comparisons:', comparisons);
    console.log(`Matched_User:`, matchedUser);

    if (!matchedUser) {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'invalid or expired token');
    }

    if (matchedUser.isEmailVerified) {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'email already verified');
    }

    await verifyUser(matchedUser._id);

    return {
        message: 'user verification has been done successfully',
    };
};

const loginUserService = async ({ email, password }) => {
    if (!email || !password) {
        throw new ApiError(
            StatusCodes.BAD_REQUEST,
            'both email and password is required'
        );
    }
    const user = await findUserByEmail(email);
    if (!user) {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'invalid email id');
    }

    const isPasswordCorrect = user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'invalid password');
    }

    if (!user.isEmailVerified) {
        throw new ApiError(
            StatusCodes.BAD_REQUEST,
            'please verify email before loggin in'
        );
    }

    const { accessToken, refreshToken } = await generateATandRt(user._id);

    return {
        user,
        accessToken,
        refreshToken,
    };
};

const logoutUserService = async (userId) => {
    if (!userId) {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'unauthorized');
    }
    await logout(userId);
    return {
        message: 'user logged out successfully',
    };
};

export {
    registerUserService,
    verifyUserService,
    loginUserService,
    logoutUserService,
};
