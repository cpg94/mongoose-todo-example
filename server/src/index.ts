import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import cors from 'cors'
import { loginRouter } from './routes/login';
import { userRouter } from './routes/user';
import { todoRouter } from './routes/todo';

const PORT = process.env.PORT || 3001
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())

app.use('/user', userRouter)
app.use('/login', loginRouter)
app.use('/todo', todoRouter)

mongoose.connect('mongodb+srv://admin:SYjYfM3QxQU7BB9a@cluster0.z2x60.mongodb.net/tech?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})