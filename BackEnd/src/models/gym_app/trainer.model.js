import mongoose, { Schema } from 'mongoose';

const trainerSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Trainer name is required'],
            trim: true,
        },
        expertiseAreas: {
            type: [String], // e.g., ["Strength Training", "Yoga", "CrossFit"]
            required: true,
        },
        experienceYears: {
            type: Number,
            min: [0, 'Experience cannot be negative'],
            default: 0,
        },
        available: {
            type: Boolean,
            default: true,
        },
        contact: {
            phone: String,
            email: {
                type: String,
                lowercase: true,
                unique: true,
            },
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },
    },
    { timestemps: true }
);

export const Trainer = mongoose.model('Trainer', trainerSchema);