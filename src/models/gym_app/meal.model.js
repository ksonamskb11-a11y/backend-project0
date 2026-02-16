import mongoose, { Schema } from 'mongoose';

const mealSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },                                  // e.g., Breakfast, Lunch
        time: {
            type: String,
            required: true,
        },                                  // e.g., "08:00 AM"
        items: [
            {
                food: {
                    type: String,
                    required: true,
                },                           // e.g., "Oats with milk"
                quantity: {
                    type: String,
                },                          // e.g., "100g"
                calories: {
                    type: Number,
                },                          // kcal
                protein: {
                    type: Number,
                },                          // grams
                carbs: {
                    type: Number,
                },                          // grams
                fats: {
                    type: Number,
                },                           // grams
            },
        ],
    },
    { timestamps: true }
)

export const Meal = mongoose.model('Meal', mealSchema);