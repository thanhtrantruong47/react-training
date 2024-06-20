// https://react.dev/learn/you-might-not-need-an-effect#challenges

import { useState } from "react";
import { createTodo, initialTodos, Todo } from "./todos";

interface NewTodoProps {
  onAdd: (newTodo: Todo) => void;
}

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
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>{activeTodos.length} todos left</footer>
    </>
  );
};

const NewTodo = ({ onAdd }: NewTodoProps) => {
  const [text, setText] = useState("");

  const handleAddClick = () => {
    setText("");
    onAdd(createTodo(text));
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
};

export default TodoList;
