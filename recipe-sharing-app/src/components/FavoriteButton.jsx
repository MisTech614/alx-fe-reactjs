// src/components/FavoriteButton.jsx
import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

  const isFav = favorites.includes(recipeId);

  return (
    <button
      onClick={() => toggleFavorite(recipeId)}
      style={{
        padding: '6px 12px',
        borderRadius: '6px',
        backgroundColor: isFav ? '#ff4757' : '#f1f2f6',
        color: isFav ? '#fff' : '#333',
        border: 'none',
        cursor: 'pointer',
        marginTop: '10px',
      }}
    >
      {isFav ? '💖 Remove Favorite' : '🤍 Add Favorite'}
    </button>
  );
};
export default FavoriteButton; 
