import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            lowerCase: true,
            trim: true,
        },
        email: {
            type: String,
            lowerCase: true,
            index: true,
            unique: [true, 'email must be unique'],
            required: true,
        },
        password: {
            type: String,
            required: [true, 'pass is required'],
        },
        image: {
            type: String,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
        todos: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Todo',
            },
        ],
    },
    { timestamps: true }
);

export const User = mongoose.model('User', userSchema);

// mongodb => plural + lowercase = users , todos
