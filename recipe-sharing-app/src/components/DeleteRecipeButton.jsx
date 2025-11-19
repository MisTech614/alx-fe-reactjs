import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?');
    if (!confirmed) return;

    deleteRecipe(recipeId);
    navigate('/'); // go back to home
  };

  return (
    <button
      onClick={handleDelete}
      style={{ backgroundColor: '#f44336', color: '#fff', padding: '8px 12px' }}
    >
      Delete Recipe
    </button>
  );
};
export default DeleteRecipeButton;
