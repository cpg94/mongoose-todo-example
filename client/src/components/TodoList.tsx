import React, { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, selectTodos, toggleTodoComplete } from '../features/todo/todoSlice'
import { ListGroup, ListGroupItem } from "shards-react";
import styled from 'styled-components';

const TodoListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`

const Container = styled.div`
    margin-top: 20px;
`

const TodoList = () => {
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])
    return (
        <Container>
            <ListGroup>
                {(todos && !!todos.length) && (
                    <Fragment>
                        {todos.map((todo) => (
                            <ListGroupItem onClick={() => dispatch(toggleTodoComplete(todo._id))} key={todo._id}>
                                <TodoListItem>
                                <p>{todo.description}</p>
                                <p>{todo.completed ? '✅' : '❌'}</p>
                                </TodoListItem>
                            </ListGroupItem>
                        ))}
                    </Fragment>
                )}
            </ListGroup>
        </Container>
    )
}

export default TodoList