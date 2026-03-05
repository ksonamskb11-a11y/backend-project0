import { StatusCodes } from 'http-status-codes';
import {
    createUser,
    findUserByEmail,
    findUserByEmailOrUserName,
    saveUser,
} from '../repositories/auth.repositories.js';
import { ApiError } from '../utils/api-error.js';
import { userVerificationEmailContent } from '../utils/mail.templates.js';
import { sendEmail } from './mailer.js';

const registerUserService = async ({ fullName, userName, email, password }) => {
    const existingUser = await findUserByEmailOrUserName(email,userName);
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

    // const createdUser = await User.findById(user._id);

    const rawToken = await user.generateEmailVerificationToken();
    user.emailVerificationToken = rawToken;

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

export { registerUserService };
