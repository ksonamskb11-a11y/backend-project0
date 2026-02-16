// Sub-schema for workout logs
import mongoose, { Schema } from 'mongoose';

const workoutSchema = new Schema(
    {
        date: {
            type: Date,
            default: Date.now,
        },
        exercises: [
            {
                name: {
                    type: String,
                    required: true,
                    trim: true,
                },
                sets: {
                    type: Number,
                    min: 1,
                    required: true,
                },
                reps: {
                    type: Number,
                    min: 1,
                    required: true,
                },
                weight: { type: Number, min: 0 }, // in kg
            },
        ],
    },
    { timestamps: true }
);

export const Workout = mongoose.model('Workout', workoutSchema);