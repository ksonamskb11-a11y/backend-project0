import mongoose, { Schema } from 'mongoose';

const todoSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
        subTodos: [
            {
                type: Schema.Types.ObjectId,
                ref: 'SubTodo',
            },
        ],
    },
    { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
