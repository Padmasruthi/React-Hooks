
import { useState } from "react";
import "./todo.css";

export default function TodoApp() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput(""); //clear input
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>Todo App</h2>

      <div className="input-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Todo..."
        />
        <button className="btn-primary" onClick={handleAdd} disabled={!input.trim()}>
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="todo-text">{todo.text}</div>
            <button className="btn-delete" onClick={() => handleDelete(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
