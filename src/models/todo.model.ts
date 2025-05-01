import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}
const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
         where: {
            id: id,
        },
        include: {
            user: true, 
        },
    });
    return todo;
}

const updateTodo = async (id: number) => {
    const todo = await db.todo.update({
        where: {
            id: id,
        },
        data: {
            completed: true, 
        },
    });
    return todo;
}

const updateTitle = async (id: number, title: string) => {
    const body = await db.todo.update({
        where: {
            id: id,
        },
        data: {
            title: title,
        },
    })
}

const getAllTodo = async (id: number) => {
    const todo = await db.todo.findMany({
        where: {
            userId: id,
        },
    });
    return todo;
}



export { createTodo , getTodo, updateTodo, updateTitle, getAllTodo};