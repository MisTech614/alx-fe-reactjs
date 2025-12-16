import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post</h2>
      <p>Showing blog post with ID: {postId}</p>
    </div>
  );
}
