import { AxiosInstance } from "../utils/axiosInstance";
import { Todo } from "../types/todo";

export const getTodo = async (): Promise <{ success: boolean; data: Todo[]; }> => {
  try {
    const response = await AxiosInstance.get<{ data: Todo[] }>("/todo");
    console.log(response.data);

    return {
      success: true,
      data: response.data.data,
    };
  } catch (e) {
    console.error("Error fetching todo list:", e);
    return {
      success: false,
      data: [],
    };
  }
};
