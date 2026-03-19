import mongoose, { Schema } from 'mongoose';

const feeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        userId: [
            {
                type: Schema.Types.ObjectId,
                ref: 'UserGym',
                required: true,
            },
        ],
        amount: {
            type: Number,
            required: true,
        },
        frequency: {
            type: String,
            enum: ['one-time', 'monthly', 'yearly'],
            default: 'one-time',
        },
        status: {
            type: String,
            enum: ['pending', 'completed', 'refunded'],
            default: 'pending',
        },
        applicableTo: {
            type: [String], // e.g., ['student', 'vendor']
            default: [],
        },
        description: {
            type: String,
        },
    },
    { timestemps: true }
);

export const Fee = mongoose.model('Fee', feeSchema);