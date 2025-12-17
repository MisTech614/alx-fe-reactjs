import './App.css';
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
      <h1>React Todo</h1>
      <TodoList />
    </div>
  );
}
