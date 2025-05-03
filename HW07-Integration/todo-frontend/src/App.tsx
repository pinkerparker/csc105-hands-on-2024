import { useEffect, useState } from "react";
import { getTodo } from "./api/getTodo";
import { AxiosInstance } from "./utils/axiosInstance";
import { Todo } from "./types/todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  const fetchTodoData = async () => {
    const data = await getTodo();
    if (data.success) {
      setTodos(data.data);
    }
  };

  useEffect(() => {
    fetchTodoData();
  }, []);

  const handleAddTodo = async () => {
    if (inputValue.trim() === "") return;
    try {
      const response = await AxiosInstance.post("/todo", {
        name: inputValue,
      });
      const newTodo = response.data.data;
      setTodos((prev) => [...prev, newTodo]);
      setInputValue("");
    } catch (e) {
      console.error("Failed to add todo:", e);
    }
  };

  const handleRemove = async (id: number) => {
    try {
      await AxiosInstance.delete(`/todo/delete?id=${id}`);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (e) {
      console.error("Failed to delete todo:", e);
    }
  };

  const handleStatus = async (id: number) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (!todoToUpdate) return;

    try {
      await AxiosInstance.put(`/todo/complete?id=${id}`, {
        success: !todoToUpdate.success,
      });

      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, success: !todo.success } : todo
        )
      );
    } catch (e) {
      console.error("Failed to update todo status:", e);
    }
  };

  const handeleEdit = (id: number, currentName: string) => {
    setEditId(id);
    setEditValue(currentName);
  };

  const handleSaveEdit = async (id: number) => {
    try {
      await AxiosInstance.put(`/todo/edit?id=${id}`, {
        name: editValue,
      });
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, name: editValue } : todo
        )
      );
      setEditId(null);
      setEditValue("");
    } catch (e) {
      console.error("Failed to edit todo:", e);
    }
  };

  return (
    <>
      <div className="w-screen min-h-screen bg-blue-50 flex flex-col justify-center items-center font-bold">
        <div className="text-xl font-bold m-5">
          <div>67130500843 Pornchanok Phuaktao</div>
          <div>67130500857 Tanapoom Meeraksa</div>
          <div>67130500868 Sudakarn Donloei</div>
        </div>

        <div className="w-200 h-200 bg-blue-200 p-8 flex flex-col items-center gap-5 rounded-2xl">
          <div className="text-3xl">Todo List</div>

          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter new todo"
            className="w-full h-10 p-2 rounded-xl border border-gray-400"
          />

          <button
            onClick={handleAddTodo}
            className="w-full h-10 rounded-xl bg-indigo-300 font-bold hover:bg-indigo-400"
          >
            Add Todo
          </button>

          <ul className="w-full mt-2 flex flex-col overflow-scroll h-130 p-6 pt-0 items-center">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="bg-white m-3 rounded-2xl text-base w-full justify-center grid grid-cols-2 p-2"
              >
                <div
                  className={`flex items-center ${
                    todo.success ? "line-through" : ""
                  }`}
                >
                  {editId === todo.id ? (
                    <input
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="p-2 border rounded-xl"
                    />
                  ) : (
                    todo.name
                  )}
                </div>

                <div className="grid grid-cols-3 gap-8">
                  {editId === todo.id ? (
                    <button
                      onClick={() => handleSaveEdit(todo.id)}
                      className="bg-fuchsia-200 p-2 rounded-xl"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handeleEdit(todo.id, todo.name)}
                      className="bg-fuchsia-200 p-2 rounded-xl"
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => handleStatus(todo.id)}
                    className="bg-green-200 p-2 rounded-xl"
                  >
                    {todo.success ? "Undo" : "Complete"}
                  </button>

                  <button
                    onClick={() => handleRemove(todo.id)}
                    className="bg-red-200 p-2 rounded-xl"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
