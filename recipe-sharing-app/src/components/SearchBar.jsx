import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  // Read each piece of state with its own call
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const ingredientFilter = useRecipeStore((state) => state.ingredientFilter);
  const maxPrepTime = useRecipeStore((state) => state.maxPrepTime);

  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const setIngredientFilter = useRecipeStore((state) => state.setIngredientFilter);
  const setMaxPrepTime = useRecipeStore((state) => state.setMaxPrepTime);

  return (
    <div
      style={{
        marginBottom: '20px',
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
    >
      <h2 style={{ marginTop: 0 }}>Search & Filter</h2>

      <div style={{ marginBottom: '8px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>
          Search by name or description:
        </label>
        <input
          type="text"
          value={searchTerm}
          placeholder="e.g. spaghetti, curry..."
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '8px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>
          Filter by ingredient:
        </label>
        <input
          type="text"
          value={ingredientFilter}
          placeholder="e.g. chicken, tomato..."
          onChange={(e) => setIngredientFilter(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '4px' }}>
          Max preparation time (minutes):
        </label>
        <input
          type="number"
          min="0"
          value={maxPrepTime}
          placeholder="e.g. 30"
          onChange={(e) => setMaxPrepTime(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
    </div>
  );
};
export default SearchBar; 