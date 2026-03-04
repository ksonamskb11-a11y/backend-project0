import mongoose, { Schema } from 'mongoose';
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        profileImage: {
            type: {
                url: String,
                localPath: String,
            },
            default: {
                url: 'https://placehold.co/200x200',
                localPath: '',
            },
        },
        fullName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: [50, 'Name should be less than 50 characters'],
        },
        userName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: [50, 'Name should be less than 50 characters'],
            index: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'password is required'],
            trim: true,
            minlength: 4,
            maxlength: 30,
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
        refreshToken: {
            type: String,
        },
        emailVerificationToken: {
            type: String,
        },
        emailVerificationTokenExpiry: {
            type: Date,
        },
        forgotPasswordToken: {
            type: String,
        },
        forgotPasswordTokenExpiry: {
            type: Date,
        },
    },
    { timestamps: true }
);

// hash the password
userSchema.pre("save",async function () {
   if (!this.isModified('password')) {
     return 
   }
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password,salt);
})

// compare the password
userSchema.methods.isPasswordCorrect = async function (incomingPassword) {
    return  bcrypt.compare(incomingPassword,this.password)
}

const User = mongoose.model('User', userSchema);

export default User;