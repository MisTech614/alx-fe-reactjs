// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const ingredientFilter = useRecipeStore((state) => state.ingredientFilter);
  const maxPrepTime = useRecipeStore((state) => state.maxPrepTime);

  const isFiltering =
    searchTerm.trim() !== '' ||
    ingredientFilter.trim() !== '' ||
    maxPrepTime !== '';

  const listToShow = isFiltering ? filteredRecipes : recipes;

  if (listToShow.length === 0) {
    return <p>No recipes match your filters.</p>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      {listToShow.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '10px',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 && (
            <p style={{ fontSize: '0.9rem' }}>
              <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
            </p>
          )}

          {typeof recipe.prepTime === 'number' && (
            <p style={{ fontSize: '0.9rem' }}>
              <strong>Prep time:</strong> {recipe.prepTime} minutes
            </p>
          )}
          {/* Favorite toggle button */}
          <FavoriteButton recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};
export default RecipeList; 


