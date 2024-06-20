import { Todo } from "../../types/Todo";

let nextId = 0;

interface createTodoProps {
  description: string;
  completed: boolean;
}

export const createTodo = ({
  description,
  completed = false,
}: createTodoProps) => {
  return {
    id: nextId++,
    description,
    completed,
  };
};

export const initialTodos: Todo[] = [
  createTodo({ description: "Get apples", completed: true }),
  createTodo({ description: "Get oranges", completed: true }),
  createTodo({ description: "Get carrots", completed: false }),
];
