import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList", () => {
  test("renders correctly with initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Todo List")).toBeInTheDocument();

    // initial todos
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
    expect(screen.getByText("Ship the app")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByLabelText("todo-input");
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "New todo item" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New todo item")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  test("toggles a todo completed/not completed", () => {
    render(<TodoList />);

    const learnReact = screen.getByText("Learn React");

    // initially not completed => no line-through
    expect(learnReact).not.toHaveStyle("text-decoration: line-through");

    // toggle
    fireEvent.click(learnReact);
    expect(learnReact).toHaveStyle("text-decoration: line-through");

    // toggle back
    fireEvent.click(learnReact);
    expect(learnReact).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    expect(screen.getByText("Write tests")).toBeInTheDocument();

    const deleteBtn = screen.getByLabelText("delete-Write tests");
    fireEvent.click(deleteBtn);

    expect(screen.queryByText("Write tests")).not.toBeInTheDocument();
  });
});
