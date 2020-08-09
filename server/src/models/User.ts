import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
    email: string;
    name?: string;
    magicToken?: string;
  }

const User = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    magicToken: {
        type: String,
        unique: true
    },
    todos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Todo"
        }
    ]
})

export default mongoose.model<IUser>('User', User)