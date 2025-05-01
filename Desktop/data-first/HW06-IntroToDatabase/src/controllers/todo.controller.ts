import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";
import { title } from "process";

type createTodoBody = {
  title: string;
  userId: number;
};

const createTodo = async (c: Context) => {
  try {
    const body = await c.req.json<createTodoBody>();
    if (!body.title || !body.userId)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    const newTodo = await todoModel.createTodo(body.title, body.userId);
    return c.json({
      success: true,
      data: newTodo,
      msg: "Created new Todo!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};
const getTodo = async (c: Context) => {
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const data = await todoModel.getTodo(parseInt(param));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};
const updateTodo = async (c: Context) => {
  try {
    const UpdateTodo = c.req.query("id");
    if (isNaN(parseInt(UpdateTodo as string))) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "not a number",
        },
        400
      );
    }
    await todoModel.updateTodo(Number(UpdateTodo));
    return c.json(
      {
        success: true,
        data: null,
        msg: "update complete!!!",
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const updateTitle = async (c: Context) => {
  try {
    const id = c.req.query("id");
    const UpdateTitle = await c.req.json<{title: string}>();
    if (!id || isNaN(parseInt(id)) || !UpdateTitle.title) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    }
    await todoModel.updateTitle(Number(id), String(title));
    return c.json(
        {
          success: true,
          data: null,
          msg: "update title complete!!!",
        },
        400
      );

  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const getAllTodo = async (c: Context) => {
    try {
        const id = c.req.query("id");
        if (!id || isNaN(parseInt(id))){
            return c.json(
                {
                  success: false,
                  data: null,
                  msg: "Missing required fields",
                },
                400
              );
        }
        const todos = await todoModel.getAllTodo(Number(id));
        return c.json(
            {
              success: true,
              data: todos,
              msg: "update title complete!!!",
            },
            400
          );

    } catch (e) {
        return c.json(
            {
              success: false,
              data: null,
              msg: `${e}`,
            },
            500
          );
    }
}
export { createTodo, getTodo, updateTodo, updateTitle, getAllTodo  };
