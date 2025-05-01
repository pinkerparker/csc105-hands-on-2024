import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
  firstName: string;
  lastName: string;
};

const createUser = async (c: Context) => {
  try {
    const body = await c.req.json<createUserBody>();
    if (!body.firstName || !body.lastName)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    if (await userModel.isDuplicate(body.firstName, body.lastName)) {
      return c.json({
        success: false,
        data: null,
        msg: "user alreadly exist",
      });
    }
    const newUser = await userModel.createUser(body.firstName, body.lastName);
    return c.json({
      success: true,
      data: newUser,
      msg: "Created new User!",
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

const getUser = async (c: Context) => {
  try {
    const user = await userModel.getUser();
    return c.json(
      {
        success: true,
        data: user,
        msg: "get all user",
      },
      200
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

const editUser = async (c: Context) => {
  try {
    const idParam = c.req.param("id");
    if (!idParam) {
      return c.json({
        success: true,
        data: null,
        msg: "missing user id",
      });
    }
    const id = parseInt(idParam);
    const body = await c.req.json<createUserBody>();
    if (!body.firstName || !body.lastName) {
      return c.json(
        { success: false, data: null, msg: "Missing required fields" },
        400
      );
    }

    const updatedUser = await userModel.editUser(
      id,
      body.firstName,
      body.lastName
    );

    return c.json({
      success: true,
      data: updatedUser,
      msg: "User updated successfully",
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

export { createUser, getUser, editUser };
