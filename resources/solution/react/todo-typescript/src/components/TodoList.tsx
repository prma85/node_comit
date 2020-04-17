import React from 'react';

export interface Todo {
  text: string;
  id: number;
  toString: () => string
}

interface TodoListProps {
  todos: Todo[]; // or todos: Array<Todo>
  removeTodo: (value: number) => void
}

const TodoList = (props: TodoListProps) => {
  const todos = props.todos;
  const remove = props.removeTodo;

  const renderTodos = todos.map(todo => (
    <li onClick={()=> remove(todo.id)} key={todo.id}>{todo.text}</li>
  ))

  return (
    <ul>{renderTodos}</ul>
  )
}

export default TodoList;