import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, title: "Item AAAAAAAA", done: false },
      { id: 2, title: "Item B", done: false },
    ],
    newTodoTitle: "",
  };

  addItemHandler = (e) => {
    this.setState({
      newTodoTitle: e.target.value,
    });
  };

  addHandler = (e) => {
    const newTodos = [...this.state.todos];
    newTodos.push({
      id: this.state.todos.length + 1,
      title: this.state.newTodoTitle,
      done: false,
    });

    this.setState({
      todos: newTodos,
      newTodoTitle: "",
    });
  };

  toggleState = (todoItemId) => {
    const newTodos = [...this.state.todos];
    const theItem = newTodos.find((todo) => todo.id === todoItemId);

    theItem.done = !theItem.done;

    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div>
        <h1>TODO App</h1>
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <li
                key={todo.id}
                onClick={(e) => this.toggleState(todo.id)}
                className={`${todo.done ? "done" : ""}`}
              >
                {todo.title}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          value={this.state.newTodoTitle}
          onChange={this.addItemHandler}
          placeholder="Todo Item..."
        />
        <button onClick={this.addHandler}>Add</button>
      </div>
    );
  }
}

export default App;
