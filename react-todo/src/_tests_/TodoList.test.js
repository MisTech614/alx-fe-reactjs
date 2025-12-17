import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/learn/i)).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    fireEvent.change(screen.getByPlaceholderText(/add/i), {
      target: { value: "New todo" },
    });

    fireEvent.click(screen.getByText(/add/i));
    expect(screen.getByText("New todo")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText(/learn/i);

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText(/delete/i);

    fireEvent.click(deleteButtons[0]);
    expect(screen.queryByText(/learn/i)).not.toBeInTheDocument();
  });
});
