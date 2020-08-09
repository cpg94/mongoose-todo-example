import mongoose, { Schema, Document } from 'mongoose'

export interface ITodo extends Document {
    description: string;
    user?: string;
    completed?: boolean;
  }

const Todo = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model<ITodo>('Todo', Todo)