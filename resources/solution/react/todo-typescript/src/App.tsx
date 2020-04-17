import React from 'react';
import {Layout} from 'antd';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <Layout>
      <Layout.Header style={{ textAlign: "center" }}>
        <h1>To-Do List</h1>
      </Layout.Header>
      <Layout.Content>
        <TodoForm addTodo={(value: string)=> alert(value)} />
      </Layout.Content>
    </Layout>
  );
}

export default App;
