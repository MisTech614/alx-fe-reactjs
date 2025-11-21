// src/store/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // ---- STATE ----
  recipes: [
    {
      id: 1,
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with rich meat sauce.',
    },
    {
      id: 2,
      title: 'Chicken Curry',
      description: 'A flavorful curry with tender chicken pieces.',
    },
  ],

  searchTerm: '',
  filteredRecipes: [],

  // ---- ACTIONS: CRUD setRecipes ----
  addRecipe: (newRecipe) => {
    set(
      (state) => ({
        recipes: [...state.recipes, newRecipe],
      }),
      false,
      'addRecipe'
    );

    // keep filters in sync
    const { searchTerm } = get();
    if (searchTerm.trim()) {
      get().filterRecipes();
    }
  },

  updateRecipe: (updatedRecipe) => {
    set(
      (state) => ({
        recipes: state.recipes.map((recipe) =>
          recipe.id === updatedRecipe.id
            ? { ...recipe, ...updatedRecipe }
            : recipe
        ),
      }),
      false,
      'updateRecipe'
    );

    const { searchTerm } = get();
    if (searchTerm.trim()) {
      get().filterRecipes();
    }
  },

  deleteRecipe: (id) => {
    set(
      (state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id),
      }),
      false,
      'deleteRecipe'
    );

    const { searchTerm } = get();
    if (searchTerm.trim()) {
      get().filterRecipes();
    }
  },

  // ---- SEARCH / FILTER ----
  setSearchTerm: (term) => {
    set({ searchTerm: term }, false, 'setSearchTerm');
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const q = searchTerm.toLowerCase();

    const filtered = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(q) ||
        recipe.description.toLowerCase().includes(q)
    );

    set({ filteredRecipes: filtered }, false, 'filterRecipes');
  },
}));
