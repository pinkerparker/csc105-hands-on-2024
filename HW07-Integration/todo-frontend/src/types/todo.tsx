export type Todo = {
  id: number;
  name: string;
  success: boolean;
};

export const initialTodos: Todo[] = [
  { id: 1, name: "Learn Frontend", success: false },
  { id: 2, name: "Learn Backend", success: false },
];