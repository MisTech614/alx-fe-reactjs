import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
        <h1>React Query Demo</h1>

        <button onClick={() => setShowPosts((s) => !s)}>
          {showPosts ? "Navigate away (unmount)" : "Go back (mount)"}
        </button>

        <div style={{ marginTop: 16 }}>
          {showPosts ? <PostsComponent /> : <p>Component unmounted.</p>}
        </div>
      </div>

      {/* React Query Devtools*/}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
