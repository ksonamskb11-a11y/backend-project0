const resendVerificationEmailService = async (email) => {
    const user = await findUserByEmail(email);

    if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, 'User not found');
    }

    if (user.isVerified) {
        throw new ApiError(StatusCodes.BAD_REQUEST, 'User already verified');
    }

    const rawToken = await user.generateEmailVerificationToken();

    await saveUser(user);

    const verificationLink = `http://localhost:${process.env.PORT}/api/v1/auth/verify-email/${rawToken}`;

    const { html } = userVerificationEmailContent({
        name: user.fullName,
        verificationLink,
    });

    await sendEmail({
        userEmail: user?.email,
        subject: 'user re-verification email',
        html,
    });
    return { message: 'Verification email resent successfully' };
};

const resendVerificationEmailHandler = async (req, res, next) => {
  try {
    const { email } = req.body;

    await resendVerificationEmailService(email);
    next();
    return res.status(200).json(
      new ApiResponse(
                    StatusCodes.OK,
                    {},
                    'Email Re_verification successful'
    )
);

  } catch (error) {
        console.log(error, 'Error in resend_Verification_Email_Handler');
        throw new ApiError(
            StatusCodes.INTERNAL_SERVER_ERROR,
            'error in resend_Verification_Email_Handler',
            { error }
        );
  }
};

authRouter.route('/resend-email-verification').get(verifyJwt, resendVerificationEmailHandler, verifyUserHandler);     