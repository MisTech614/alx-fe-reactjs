// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const searchTerm = useRecipeStore((s) => s.searchTerm);
  const recipes = useRecipeStore((s) => s.recipes);
  const filteredRecipes = useRecipeStore((s) => s.filteredRecipes);

  const listToShow = searchTerm.trim() ? filteredRecipes : recipes;

  if (listToShow.length === 0) {
    return <p>No matching recipes found.</p>;
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
          <Link to={`/recipes/${recipe.id}`}>View details</Link>
        </div>
      ))}
    </div>
  );
};
export default RecipeList;

