import User from '../models/user.model.js';

const createUser = async ({ fullName, userName, email, password }) => {
    const user = await User.create({
        fullName,
        userName,
        email,
        password,
    });
    return user;
};

const findUserById = async (id) => {
    const user = await User.findById(id);
    return user;
};

const findUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
};

const findUserByEmailOrUserName = async (email, userName) => {
    const user = await User.findOne({
        $or: [{ email }, { userName }],
    });
    return user;
};

const saveUser = async (user) => {
    const updatedUser = await user.save({ validateBeforeSave: false });
    return updatedUser;
};

const assignRefreshToken = async (userId, refreshToken) => {
    const user = await User.findByIdAndUpdate(userId, {
        $set: { refreshToken: refreshToken },
    });
    await user.save();
    return user;
};

const findAllValidUsersWithValidVerificationToken = async () => {
    const users = await User.find({
        isEmailVerified: false,
        emailVerificationTokenExpiry: { $gt: Date.now() },
    });

    return users;
};

const verifyUser = async (userId) => {
    const verifiedUser = await User.findByIdAndUpdate(userId, {
        $set: {
            isEmailVerified: true,
        },
        $unset: {
            emailVerificationToken: null,
            emailVerificationTokenExpiry: null,
        },
    });

    return verifiedUser;
};

export {
    createUser,
    findUserByEmail,
    findUserByEmailOrUserName,
    saveUser,
    findUserById,
    assignRefreshToken,
    findAllValidUsersWithValidVerificationToken,
    verifyUser,
};
