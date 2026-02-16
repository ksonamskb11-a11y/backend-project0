import mongoose, { Schema } from 'mongoose';

const dietPlanSchema = new Schema(
    {
        planName: {
            type: String,
            required: true,
        }, // e.g., "Muscle Gain Plan"
        goal: {
            type: String,
            enum: ['Weight Loss', 'Muscle Gain', 'Maintenance'],
            required: true,
        },
        durationWeeks: {
            type: Number,
            default: 4,
        },
        dailyCalories: {
            type: Number,
            required: true,
        },
        meals: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Meal',
            },
        ],
        createdBy: [
            {
                type: Schema.Types.ObjectId,
                ref: 'UserGym',
            },
        ],
    },
    { timestamps: true }
)

export const DietPlan = mongoose.model('DietPlan', dietPlanSchema);