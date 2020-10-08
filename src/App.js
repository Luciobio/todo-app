import React, {Component} from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      todos: [
        {id: 1, cont: 'Alimentar al gato'},
        {id: 2, cont: 'Preparar la clase'}
      ]
    };
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todoItem => {
      return todoItem.id !== id
    });

    this.setState({
      todos: todos
    })
  }

  addTodo = (todoItem) => {
    todoItem.id = Math.random();
    let todos = [...this.state.todos, todoItem];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To-do List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <br/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }

}
