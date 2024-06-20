import { useState } from "react";
import { createTodo } from "../TodoList/todos";
import { Todo } from "../../types/Todo";

interface NewTodoProps {
  onAdd: (newTodo: Todo) => void;
}

const NewTodo = ({ onAdd }: NewTodoProps) => {
  const [text, setText] = useState("");

  const handleAddClick = () => {
    const newTodo = createTodo({
      description: text,
      completed: false,
    });
    onAdd(newTodo);
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
