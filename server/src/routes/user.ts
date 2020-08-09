import { Router } from 'express'
import UserController from '../controllers/User'
const userRouter = Router();
const User = new UserController()

userRouter.post('/token', (req, res) => User.getViaToken(req, res));

export { userRouter }