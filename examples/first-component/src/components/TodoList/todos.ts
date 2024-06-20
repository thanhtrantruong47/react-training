let nextId = 0;

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const createTodo = (text: string, completed: boolean = false): Todo => ({
  id: nextId++,
  text,
  completed,
});

export const initialTodos: Todo[] = [
  createTodo("Get apples", true),
  createTodo("Get oranges", true),
  createTodo("Get carrots"),
];
