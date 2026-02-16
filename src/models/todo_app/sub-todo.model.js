// Sub-Todo
import mongoose, { Schema } from "mongoose";

const subTodoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "SubTodo Title is Required"],
      trim: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      trim: true,
    },
    dueDate: {
      type: Date,
      message: "Task must be completed before Due-Date.",
    },
  },
  { timestemps: true },
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
