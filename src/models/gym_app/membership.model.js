// Sub-schema for membership details
import mongoose, { Schema } from 'mongoose';

const membershipSchema = new Schema(
    {
        planType: {
            type: String,
            enum: ['Monthly', 'Quarterly', 'Yearly'],
            required: true,
        },
        startDate: {
            type: Date,
            default: Date.now,
        },
        endDate: {
            type: Date,
            required: [true, 'Membership End Date mandatry'],
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        fees: [{
            type: Schema.Types.ObjectId,
            ref: 'Fee'
        }],
        trainer: [{
            type: Schema.Types.ObjectId,
            ref: 'Trainer'
        }],
        diet_plan: [{
            type: Schema.Types.ObjectId,
            ref: 'Diet_Plan'
        }]
    },
    { timestamps:true }
);

 export const Membership = mongoose.model('Membership', membershipSchema);