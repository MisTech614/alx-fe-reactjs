import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favRecipes = recipes.filter((r) => favorites.includes(r.id));

  if (favRecipes.length === 0) {
    return <p>You have no favorite recipes yet.</p>;
  }

  return (
    <div>
      <h2>My Favorites ❤️</h2>
      {favRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ddd',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '10px',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
export default FavoritesList; 
