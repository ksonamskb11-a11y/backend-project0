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

export {
    createUser,
    findUserByEmail,
    findUserByEmailOrUserName,
    saveUser,
    findUserById,
    assignRefreshToken,
};
