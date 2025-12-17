import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Write tests", completed: false },
  { id: 3, text: "Ship the app", completed: true },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(text) {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm onAdd={addTodo} />

      <ul aria-label="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              role="button"
              tabIndex={0}
              aria-label={`toggle-${todo.text}`}
              onClick={() => toggleTodo(todo.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter") toggleTodo(todo.id);
              }}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button
              aria-label={`delete-${todo.text}`}
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
