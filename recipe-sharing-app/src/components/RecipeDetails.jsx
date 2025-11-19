import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton.jsx';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <hr style={{ margin: '20px 0' }} />

      <h2>Edit Recipe</h2>
      <EditRecipeForm recipeId={recipeId} />

      <div style={{ marginTop: '16px' }}>
        <DeleteRecipeButton recipeId={recipeId} />
      </div>
    </div>
  );
};
export default RecipeDetails;
