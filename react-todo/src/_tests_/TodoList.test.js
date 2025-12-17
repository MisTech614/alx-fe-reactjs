import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Write tests")).toBeInTheDocument();
  expect(screen.getByText("Ship the app")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);

  fireEvent.change(screen.getByPlaceholderText("Add a todo..."), {
    target: { value: "New todo" },
  });

  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("New todo")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const item = screen.getByText("Learn React");

  fireEvent.click(item);
  expect(item).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByLabelText("delete-Write tests"));
  expect(screen.queryByText("Write tests")).not.toBeInTheDocument();
});
