import BaseFetch from './BaseFetch'
import { navigate } from '@reach/router'

class TodoService extends BaseFetch {
    getTodos = async () => {
        try {
            const req = await this.fetch('todo/', {
                method: 'GET'
            })
            const json = await req.json()
            return json
        } catch(_){
            localStorage.clear()
            navigate('/')
        }
    } 

    createTodo = async (description: string) => {
        const req = await this.fetch('todo/', {
            method: 'POST',
            body: JSON.stringify({ description })
        })
        const json = await req.json()
        return json
    }

    toggleTodoComplete = async (todoId: string) => {
        const req = await this.fetch(`todo/${todoId}`, {
            method: 'POST'
        })
        const json = await req.json()
        return json
    }
}

export default new TodoService()