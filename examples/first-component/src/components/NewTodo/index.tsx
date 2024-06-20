import React, { useState } from "react";
import { createTodo } from "../TodoList/todos";
import { Todo } from "../../types/Todo";

interface NewTodoProps {
  onAdd: (newTodo: Todo) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAddClick = () => {
    onAdd(
      createTodo({
        text: text,
        completed: false,
      })
    );
    setText("");
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
};

export default NewTodo;
