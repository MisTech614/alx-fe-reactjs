// the githubService.js file inside the services folder on src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com/users";
const BASE_SEARCH_URL = "https://api.github.com/search/users";
/**
 * Existing: fetch a single GitHub user by username.
 */
/**
 * Fetch a single GitHub user's data by username.
 * Base search from : https://api.github.com/search/users
 * GitHub API endpoint: https://api.github.com/users/{username}
 */
export const fetchUserData = async (username) => {
  const trimmed = username.trim();
  if (!trimmed) throw new Error("Username is required");

  const response = await axios.get(`${BASE_USER_URL}/${trimmed}`);
  return response.data;
};

/**
 * Advanced search using GitHub Search API.
 * Supports username, location and minimum repo count + pagination.
 */
export const searchUsersAdvanced = async ({
  username = "",
  location = "",
  minRepos = "",
  page = 1,
  perPage = 10,
}) => {
  const queryParts = [];

  if (username.trim()) queryParts.push(username.trim());
  if (location.trim()) queryParts.push(`location:${location.trim()}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const q = queryParts.join(" ");

  if (!q) {
    throw new Error("At least one search field is required");
  }

  // 1) Search for users
  const response = await axios.get(BASE_SEARCH_URL, {
    params: {
      q,
      page,
      per_page: perPage,
    },
  });

  const { items, total_count } = response.data;

  // 2) For richer data (location, repo count, etc.) fetch details for each user
  const detailedUsers = await Promise.all(
    items.map(async (user) => {
      try {
        const userRes = await axios.get(`${BASE_USER_URL}/${user.login}`);
        return userRes.data;
      } catch {
        // fallback to basic info if detail fetch fails
        return user;
      }
    })
  );

  return {
    users: detailedUsers,
    totalCount: total_count,
  };
};