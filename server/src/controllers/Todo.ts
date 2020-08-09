import express from 'express';
import Todo from '../models/Todo'

class TodoController {
    getUserTodos = async (req: express.Request, res: express.Response) => {
        try { 
            const todos = await Todo.find({ user: req.body.user_id })
            res.send(todos)
        } catch (err) {
            res.send(err)
        }
    }

    create = async (req: express.Request, res: express.Response) => {
        try { 
            const { description } = req.body
            if(description){
                const todo = await Todo.create({
                    user: req.body.user_id,
                    description
                })
                res.send(todo)
                return 
            }
            throw new Error('No description provided')
        } catch (err) {
            res.send(err)
        }
    }

    toggleComplete = async (req: express.Request, res: express.Response) => {
        try { 
            const todo = await Todo.findOne({ _id: req.params.todoId })
            // Need to get this to return updated record, not query again
            await Todo.updateOne({ _id: req.params.todoId }, { completed: !todo.completed })
            const updatedTodo = await Todo.findOne({ _id: req.params.todoId })
            res.send(updatedTodo)
        } catch (err) {
            res.send(err)
        }
    }
}

export default TodoController;