import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import todoService from '../../utils/TodoService';

interface ITodo {
    description: string;
    completed: boolean;
    _id: string;
}

interface TodoState {
  todos: Array<ITodo>;
  error?: string
}

const initialState: TodoState = {
  todos: [],
  error: ''
};

export const fetchTodos = createAsyncThunk(
    'todo/getAll',
    async () => {
        const todos = await todoService.getTodos()
        return todos
    }
)

export const createTodo = createAsyncThunk(
    'todo/create',
    async (description: string) => {
        const todo = await todoService.createTodo(description)
        return todo
    }
)

export const toggleTodoComplete = createAsyncThunk(
    'todo/toggle',
    async (id: string) => {
        const todo = await todoService.toggleTodoComplete(id)
        return todo
    }
)

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload
    })
    builder.addCase(createTodo.fulfilled, (state, action) => {
        state.todos = [...state.todos, action.payload]
    })
    builder.addCase(toggleTodoComplete.fulfilled, (state, action) => {
        const updatedTodoIndex = state.todos.findIndex((todo) => todo._id === action.payload._id)
        if(updatedTodoIndex > -1) {
          state.todos[updatedTodoIndex] = action.payload
        }
    })
  }
});

export const selectTodos = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
