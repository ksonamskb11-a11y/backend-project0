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
      // required:[true, 'Todo must be completed before duedate'],
    },
    subTodos:{
      type: Schema.Types.ObjectId,
      ref: 'SubTodo',
    }
  },
  { timestemps: true }        // timestamps is use -to save Schema Created_At and Updated_At time records
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
