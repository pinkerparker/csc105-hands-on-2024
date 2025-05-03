import { Hono } from "hono";
import * as todoController from '../controller/todo.controller.ts'

const todoRouter = new Hono();
todoRouter.get("/", todoController.GetTodo);
todoRouter.post("/", todoController.AddTodo);
todoRouter.put("/edit", todoController.EditTodoName);
todoRouter.put("/complete", todoController.CompleteTodo);
todoRouter.delete("/delete", todoController.DeleteTodo);

export { todoRouter };
