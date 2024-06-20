import { Todo } from "../../types/Todo";

let nextId = 0;

interface createTodoProps {
  text: string;
  completed: boolean;
}

export const createTodo = ({ text, completed = false }: createTodoProps) => {
  return {
    id: nextId++,
    text,
    completed,
  };
};

export const initialTodos: Todo[] = [
  createTodo({ text: "Get apples", completed: true }),
  createTodo({ text: "Get oranges", completed: true }),
  createTodo({ text: "Get carrots", completed: false }),
];
