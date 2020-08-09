import express, { Router } from 'express'
import jwt from 'jsonwebtoken'
import TodoController from '../controllers/Todo'
import { SUPER_DUPER_SECRET } from '../config';
const todoRouter = Router();
const Todo = new TodoController()


const parseJWT = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        // need to tidy this up.
        const data: { data: string } = jwt.verify(req.headers.authorization, SUPER_DUPER_SECRET) as { data: string }
        if(data && typeof data.data === 'string'){
            const { user } = JSON.parse(data.data)
            // ideally i would add a param to the req but ts types are not my friend.
            req.body.user_id = user._id
        }
        next()
    } catch (e) {
        res.status(500).send(e.toString())
    }
}

todoRouter.get('/', parseJWT, (req, res) => Todo.getUserTodos(req, res));
todoRouter.post('/', parseJWT, (req, res) => Todo.create(req, res));
todoRouter.post('/:todoId', parseJWT, (req, res) => Todo.toggleComplete(req, res));

export { todoRouter }