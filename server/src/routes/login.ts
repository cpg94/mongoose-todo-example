import { Router } from 'express'
import LoginController from '../controllers/Login'
const loginRouter = Router();
const Login = new LoginController()

loginRouter.post('/magic-token', (req, res) => Login.requestMagicToken(req, res));

export { loginRouter }