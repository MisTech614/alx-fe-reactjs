// the githubService.js file inside the services folder on src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com/users";

/**
 * Fetch a single GitHub user's data by username.
 * GitHub API endpoint: https://api.github.com/users/{username}
 */
export const fetchUserData = async (username) => {
  const trimmed = username.trim();

  if (!trimmed) {
    throw new Error("Username is required");
  }

  try {
    const response = await axios.get(`${BASE_URL}/${trimmed}`);
    return response.data; // this will contain avatar_url, name, login, html_url, etc.
  } catch (error) {
    // rethrow so the component can handle success/error states
    throw error;
  }
};
