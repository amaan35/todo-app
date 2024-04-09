import { Schema, model } from "mongoose";
import { TypeTodo } from "../types/todo";

const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<TypeTodo>("Todo", todoSchema);
