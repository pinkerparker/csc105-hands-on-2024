import { todo } from "node:test";
import { db } from "../index.ts";

const GetTodo = async() => {
  return await db.todo.findMany();
};

const AddTodo = async(newTodoName: string) => {
  const todos = await db.todo.create({
    data: {
      name: newTodoName,
      success: false,
    }
  })
  console.log(todos)
  return todos;
};

const EditTodo = async(todoId: number, editTodoName: string) => {
 await db.todo.update({
    where: {
      id: todoId,
    },
    data: {
      name: editTodoName
    }
  })
};

const SuccessTodo = async(todoId: number, success: boolean) => {
  const todos = await db.todo.update({
    where: {
      id: todoId,
    },
    data: {
      success: success,
    }
  })
  return todos;
};

const DeleteTodo = async (todoId: number) => {
  const todos = await db.todo.delete({
    where: {
      id: todoId,
    }
  })
  return todos;
};

export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };
