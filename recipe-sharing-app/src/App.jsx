import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import RecipeList from './components/RecipeList.jsx';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails.jsx';
import FavoritesList from './components/FavoritesList.jsx';
import RecommendationsList from './components/RecommendationsList.jsx';
import { useParams } from 'react-router-dom';

// Wrapper component for Router param handling
const RecipeDetailsPage = () => {
  const { id } = useParams();
  const recipeId = Number(id); // we used numeric IDs (Date.now / numbers)
  return <RecipeDetails recipeId={recipeId} />;
};

const HomePage = () => (
  <>
    <SearchBar />
    <AddRecipeForm />
    <RecipeList />
    <FavoritesList />
    <RecommendationsList />
  </>
);

function App() {
  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '40px auto',
        padding: '16px',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <h1>Recipe Sharing App</h1>
      <p>Search and filter recipes by name, ingredient, or prep time.</p>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
      </Routes>
    </div>
  );
}
export default App;

