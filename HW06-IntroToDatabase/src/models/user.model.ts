import { db } from "../index.ts";

const isDuplicate = async( firstName: string, lastName: string ) => {
    const user = await db.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}
const createUser = async( firstName: string, lastName: string ) => {
    const user = await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const getUser = async () => {
    const user = await db.user.findMany({
  
    });
    return user;
}

const editUser = async (id: number, firstName: string, lastName: string) => {
    const user = await db.user.update({
        where: {
            id,
        },
        data: {
            firstName,
            lastName,
        },
    });
}

export { isDuplicate,createUser, getUser, editUser};
