import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {v4 as uuid} from "uuid";

function SubTodoForm({ subAddTodo }) {
  const [subTodo, setSubTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setSubTodo({ ...subTodo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (subTodo.task.trim()) {
      subAddTodo({ ...subTodo, id: uuid() });
      setSubTodo({ ...subTodo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="+ Subtask"
        type="text"
        name="+ Subtask"
        value={subTodo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}

export default SubTodoForm;