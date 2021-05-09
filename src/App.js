import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SubTodoForm from "./components/SubTodoForm";
import SubTodoList from "./components/SubTodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";
const LOCAL_STORAGE_KEY_2 = "react-todo-list-subTodos";

function App() {
  const [todos, setTodos] = useState([]);
  const [subTodos, setSubTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const storageSubTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_2));
    if (storageTodos) {
      setTodos(storageTodos);
    } 
    if (storageSubTodos) {
      setSubTodos(storageSubTodos);
    } 
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    // fires when subtTodos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY_2, JSON.stringify(subTodos));
  }, [subTodos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function subAddTodo(todo) {
    // adds new todo to beginning of todos array
    setSubTodos([todo, ...subTodos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function subToggleComplete(id) {
    setSubTodos(
      subTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function subRemoveTodo(id) {
    setSubTodos(subTodos.filter(todo => todo.id !== id));
  }
  

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
       Do-To
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
      <SubTodoForm subAddTodo={subAddTodo} />
      <SubTodoList
        todos={subTodos}
        removeTodo={subRemoveTodo}
        toggleComplete={subToggleComplete}
      />
    </div>
  );
}

export default App;
