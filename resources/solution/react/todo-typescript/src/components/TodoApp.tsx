import React from 'react';

import TodoForm from './TodoForm';
import TodoList, { Todo } from './TodoList';

interface TodoAppState {
  data: Todo[];
  id: number;
}

class TodoApp extends React.Component<any, TodoAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: [],
      id: 0,
    };
  }

  addTodo(value: string) {
    // Get the actual ID
    let id = this.state.id;

    // Assemble data
    const todo = { text: value, id: id++ };

    // Update data
    let data = this.state.data.slice();
    data.push(todo);

    // Update the state
    this.setState({ data: data, id: id });
  }

  removeTodo(id: number) {
    // Filter all Todos except the one to be removed
    let data = this.state.data.filter((todo) => todo.id !== id);

    // Update the state
    this.setState({ data: data });
  }

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList todos={this.state.data} removeTodo={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default TodoApp;
