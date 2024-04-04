import mongoose from "mongoose";
const todoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
    detail: String,
    date: Date,
  },
  { timestamps: true }
);
const TodoModel = mongoose.model("todo", todoSchema);
export default TodoModel;
