import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default function PostsComponent() {
  const {
    data = [],
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
    dataUpdatedAt,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 60_000,      // fresh for 1 minute (caching demo)
    gcTime: 5 * 60_000,     // cache kept for 5 minutes (v5 uses gcTime)
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "crimson" }}>Error: {error.message}</p>;

  return (
    <div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>Posts</h2>

        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? "Refreshing..." : "Refetch"}
        </button>

        <small style={{ opacity: 0.8 }}>
          Last updated: {new Date(dataUpdatedAt).toLocaleTimeString()}
        </small>

        {isFetching && <small>(Fetching…)</small>}
      </div>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <div style={{ opacity: 0.8 }}>{post.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
