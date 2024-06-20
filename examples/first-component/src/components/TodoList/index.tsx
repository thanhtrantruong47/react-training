// https://react.dev/learn/you-might-not-need-an-effect#challenges

import { useState } from "react";
import { initialTodos } from "./todos";
import NewTodo from "../NewTodo";
import { Todo } from "../../types/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;

  const handleTodoAdd = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={handleTodoAdd} />
      <ul>
        {visibleTodos.map(({ id, description, completed }) => (
          <li key={id}>{completed ? <s>{description}</s> : description}</li>
        ))}
      </ul>
      <footer>{activeTodos.length} todos left</footer>
    </>
  );
};

export default TodoList;
