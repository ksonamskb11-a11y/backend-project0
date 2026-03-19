import mongoose, { Schema } from 'mongoose';

const userGymSchema = new Schema(
    {
        userName: {
            type: String,
            required: [true, 'Admin Name is required'],
            trim: true,
            upperCase: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: [true, 'Email must be Unique'],
            lowerCase: true,
        },
        password: {
            type: String,
            required: [true, 'Pass is required'],
        },
        image: {
            type: String,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
        age: {
            type: Number,
            min: 12,
            max: 100,
        },
        height: {
            type: Number,
            min: 50,
        }, // in cm
        weight: {
            type: Number,
            min: 20,
        }, // in kg
        isMembership: {
            type: Boolean,
            default: false,
        },
        membership: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Membership',
            },
        ],
        trainer: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Trainer',
            },
        ],
        workouts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Workout',
            },
        ],
        diet_plan: [
            {
                type: Schema.Types.ObjectId,
                ref: 'DietPlan',
            },
        ],
        fees: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Fee',
            },
        ],
    },
    { timestamps: true }
);

export const UserGym = mongoose.model('UserGym', userGymSchema);