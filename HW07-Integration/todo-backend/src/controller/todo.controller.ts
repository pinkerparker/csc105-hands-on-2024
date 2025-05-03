import type { Context } from "hono";
import * as todoModel from "../model/todo.model.ts";

const ERR_MISSING_FIELD = {
  success: false,
  data: null,
  msg: "Missing require filed",
}

const GetTodo = async (c: Context) => {
  try {
      return c.json({
        data: await todoModel.GetTodo()
      }, 200);
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

type CreateTodoBody = {
  name: string,
}

const AddTodo = async (c: Context) => {
  try {
    const body = await c.req.json<CreateTodoBody>();
    if (!body.name)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing require fields"
        },
        400
      )
    const newtodo = await todoModel.AddTodo(body.name);
    return c.json(
      {
        success: true,
        data: newtodo,
        msg: "Add new Todo"
      }
    )
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

type EditTodobody = {
  name: string,
}

type Todo = {
  id: number,
  name: string,
  success: boolean
}

const EditTodoName = async (c: Context) => {
  try {
    const param = c.req.query("id");
    const {name} = await c.req.json<{name: string}>();
    if (!param || !name) {
      return c.json(ERR_MISSING_FIELD, 400)
    }
    await todoModel.EditTodo(parseInt(param), name);
    return c.json({
      success: true,
    })

  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const CompleteTodo = async (c: Context) => {
  try {
    const param = c.req.query("id");
    const { success } = await c.req.json<{ success: boolean }>();

    if(! param || success === undefined) {
      return c.json({
        sucess: false,
        data: null,
        msg: "Missing require field",
      })
    }

    const data = await todoModel.SuccessTodo(parseInt(param), success);
    return c.json(
      {
        success: true,
        data: data,
        msg: "Complete successful",
      }
    )
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const DeleteTodo = async (c: Context) => {
  try {
    const param = c.req.query("id");
    if(!param)
      return c.json(ERR_MISSING_FIELD, 400)

    const data = await todoModel.DeleteTodo(parseInt(param));
    return c.json(
      {
        success: true,
        data: data,
        msg: "Deleted Todo success!",
      }
    )
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

export { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo };

