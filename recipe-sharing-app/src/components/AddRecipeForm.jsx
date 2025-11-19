// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    addRecipe({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
      <h2>Add a New Recipe</h2>
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
      <button type="submit">Add Recipe</button>
    </form>
  );
};
export default AddRecipeForm;
