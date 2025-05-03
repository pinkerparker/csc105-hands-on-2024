import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.patch("/", todoController.updateTodo);
todoRouter.patch("/", todoController.updateTitle);
todoRouter.get("/all", todoController.getAllTodo);

export { todoRouter };