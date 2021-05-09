import { List } from "@material-ui/core";
import React from "react";
import SubTodo from "./SubTodo";

function SubTodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <List>
      {todos.map(todo => (
        <SubTodo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
}

export default SubTodoList;