// src/components/Search.jsx
import { useState } from "react";
import { searchUsersAdvanced } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const perPage = 10;

  const performSearch = async (pageToLoad = 1, append = false) => {
    setLoading(true);
    setError("");

    try {
      const { users: fetchedUsers, totalCount } = await searchUsersAdvanced({
        username,
        location,
        minRepos: minRepos || "",
        page: pageToLoad,
        perPage,
      });

      setUsers((prev) =>
        append ? [...prev, ...fetchedUsers] : fetchedUsers
      );

      const loadedSoFar =
        (append ? users.length : 0) + fetchedUsers.length;
      setHasMore(loadedSoFar < totalCount);
      setPage(pageToLoad);
    } catch (err) {
      console.error(err);
      setError("Looks like we cant find the user");
      setUsers([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(1, false);
  };

  const handleLoadMore = () => {
    performSearch(page + 1, true);
  };

  return (
    <section className="bg-slate-800/70 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Advanced GitHub User Search</h2>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 md:grid-cols-4 md:items-end"
      >
        <div className="md:col-span-2 flex flex-col gap-1">
          <label
            htmlFor="username"
            className="text-sm font-medium text-slate-200"
          >
            Username (optional)
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="e.g. torvalds"
            className="px-3 py-2 rounded-md bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="location"
            className="text-sm font-medium text-slate-200"
          >
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Nairobi, Kenya"
            className="px-3 py-2 rounded-md bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="minRepos"
            className="text-sm font-medium text-slate-200"
          >
            Min Repos
          </label>
          <input
            id="minRepos"
            type="number"
            min="0"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="e.g. 10"
            className="px-3 py-2 rounded-md bg-slate-900 border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="md:col-span-1 inline-flex justify-center items-center px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Status / Messages */}
      <div className="mt-4 min-h-[1.5rem]">
        {loading && <p className="text-sm text-slate-300">Loading...</p>}
        {error && <p className="text-sm text-red-400">{error}</p>}
        {!loading && !error && users.length === 0 && (
          <p className="text-sm text-slate-400">
            Enter at least one field and click Search to see results.
          </p>
        )}
      </div>

      {/* Results List */}
      {users.length > 0 && (
        <div className="mt-4 space-y-3">
          {users.map((user) => (
            <article
              key={user.id ?? user.login}
              className="flex items-center gap-4 bg-slate-900/60 rounded-lg px-4 py-3 border border-slate-700"
            >
              <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-semibold">
                  {user.name || user.login}
                  <span className="ml-2 text-xs text-slate-400">
                    @{user.login}
                  </span>
                </h3>
                <p className="text-xs text-slate-300">
                  {user.location ? user.location : "Location: N/A"}
                </p>
                <p className="text-xs text-slate-300">
                  Repositories:{" "}
                  {user.public_repos !== undefined
                    ? user.public_repos
                    : "N/A"}
                </p>
              </div>
              <a
                href={user.html_url || `https://github.com/${user.login}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-indigo-400 hover:text-indigo-300"
              >
                View Profile
              </a>
            </article>
          ))}

          {hasMore && (
            <div className="pt-2">
              <button
                type="button"
                onClick={handleLoadMore}
                className="text-sm px-4 py-2 rounded-md border border-indigo-500 text-indigo-300 hover:bg-indigo-500/10 transition-colors"
                disabled={loading}
              >
                {loading ? "Loading..." : "Load more"}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
export default Search;