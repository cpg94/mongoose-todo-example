import React from "react";
import {
  Container,
} from "shards-react";
import TodoList from '../components/TodoList'
import TodoBar from '../components/TodoBar'
import { RouteComponentProps } from "@reach/router";

const Todos: React.FC<RouteComponentProps> = () => {
  return (
    <Container>
      <TodoBar />
      <TodoList />
    </Container>
  );
};

export default Todos;
