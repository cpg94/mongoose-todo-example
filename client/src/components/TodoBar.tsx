import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    FormInput,
    InputGroup,
  } from "shards-react";
  import {
    createTodo
  } from '../features/todo/todoSlice'
import { navigate } from "@reach/router";
const TodoBar = () => {
    const [newTodo, setNewTodo] = useState<string>('')
    const dispatch = useDispatch()
    return (
        <ButtonToolbar>
        <InputGroup size="m">
          <FormInput value={newTodo} placeholder="New Todo Description" onChange={(event: React.FormEvent<HTMLInputElement>) => setNewTodo((event.target as HTMLInputElement).value)}/>
        </InputGroup>
        <ButtonGroup size="m" className="ml-auto">
          <Button onClick={() => {
            if(newTodo){
              dispatch(createTodo(newTodo))
              setNewTodo('')
            }
          }}>Create</Button>
          <Button theme="danger" onClick={() => {
            localStorage.clear()
            navigate('/')
          }}>Log Out</Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
}

export default TodoBar