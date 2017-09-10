import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ 
        task: 'Learn React',
        isCompleted: true
      }, {
        task: 'Do Laundry',
        isCompleted: true
      }],
      todoToAdd: ""
    };

    // This binding is necessary to make 'this' work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const nextTodoAdd = event.target.value;

    this.setState({
      todoToAdd: nextTodoAdd
    });
  }

  handleClick(event) {
    const nextTodos = this.state.todos.concat({
      task: this.state.todoToAdd,
      isCompleted: false // A new TODO isn't completed by default
    });
    const nextTodoToAdd = '';

    this.setState({
      todos: nextTodos,
      todoToAdd: nextTodoToAdd
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My TODO List</h2>
        </div>
          <ul>
            {this.state.todos.map((todo, index) => {
              return <TodoItem
              key={index}
              isCompleted={todo.isCompleted}>
              {todo.task}
              </TodoItem>
            })}
          </ul>
          <input type="text"
          placeholder="New TODO" 
          value={this.state.todoToAdd}
          onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Add TODO</button>
         </div>
    );
  }
}

export default App;
