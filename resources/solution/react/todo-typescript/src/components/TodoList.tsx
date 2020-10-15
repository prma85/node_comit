import { Button, Col, Row } from 'antd';
import React from 'react';

export interface Todo {
  text: string;
  id: number;
  toString: () => string;
}

interface TodoListProps {
  todos: Todo[]; // or todos: Array<Todo>
  removeTodo: (value: number) => void;
  doSomethingElse?: () => void; // the "?" means that it is optional
}

const TodoList = (props: TodoListProps) => {
  const todos = props.todos;
  const remove = props.removeTodo;

  const renderTodos = todos.map((todo) => (
    <li key={todo.id}>
      <span style={{ marginRight: "10px" }}>{todo.text}</span>
      <Button type="danger" onClick={() => remove(todo.id)} key={todo.id}>
        Delete
      </Button>
    </li>
  ));

  return (
    <Row justify="center" style={{ marginTop: "20px" }}>
      <Col span={8}>
        <ul>{renderTodos}</ul>
      </Col>
    </Row>
  );
};

export default TodoList;
