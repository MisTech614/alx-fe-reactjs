import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  // Sync local state if recipe changes
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return <p>Cannot edit: recipe not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    updateRecipe({
      ...recipe,
      title: title.trim(),
      description: description.trim(),
    });

    // Optional: navigate back to details or home
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '12px' }}>
      <div style={{ marginBottom: '8px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe title"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe description"
          rows={4}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};
export default EditRecipeForm;
