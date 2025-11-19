// src/App.jsx
import AddRecipeForm from './components/AddRecipeForm.jsx';
import RecipeList from './components/RecipeList.jsx';

function App() {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '16px',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <h1>Recipe Sharing App</h1>
      <p>Use the form below to add your favorite recipes.</p>

      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}
export default App;
