// src/components/SearchBar.jsx
function SearchBar() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search GitHub users (coming soon)..."
          className="search-input"
          disabled
        />
        <button className="search-button" disabled>
          Search
        </button>
      </div>
    );
}
export default SearchBar;
  