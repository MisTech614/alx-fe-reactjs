// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes yet. Add one above! 🍽️</p>;
  }

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '8px',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
export default RecipeList;
