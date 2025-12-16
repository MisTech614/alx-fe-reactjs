import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./PostsComponent";

function renderWithClient(ui) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
}

test("renders loading then posts", async () => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => [
      { id: 1, title: "Hello", body: "World" },
      { id: 2, title: "Hi", body: "There" },
    ],
  });

  renderWithClient(<PostsComponent />);

  expect(screen.getByText(/Loading posts/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  expect(global.fetch).toHaveBeenCalledTimes(1);
});
