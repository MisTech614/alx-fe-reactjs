// src/services/githubApi.js
import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    ...(import.meta.env.VITE_APP_GITHUB_API_KEY && {
      Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    }),
  },
});

// Example placeholder function – real logic can be added later
export const searchUsers = (query) => {
  // we'll implement this in the next task
  return githubApi.get("/search/users", {
    params: { q: query },
  });
};

export default githubApi;