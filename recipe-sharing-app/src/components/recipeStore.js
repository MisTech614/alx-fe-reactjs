// src/store/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // ---- STATE ----
  recipes: [
    {
      id: 1,
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with rich meat sauce.',
      ingredients: ['spaghetti', 'ground beef', 'tomato', 'onion', 'garlic'],
      prepTime: 30, // minutes
    },
    {
      id: 2,
      title: 'Chicken Curry',
      description: 'A flavorful curry with tender chicken pieces.',
      ingredients: ['chicken', 'curry powder', 'coconut milk', 'onion'],
      prepTime: 40, // minutes
    },
  ],
// search // filter state
  searchTerm: '',
  ingredientFilter: '',
  maxPrepTime: '', // string from input, converted to number in filter
  filteredRecipes: [],

   // ------- HELPERS -------
   hasActiveFilters: () => {
    const { searchTerm, ingredientFilter, maxPrepTime } = get();
    return (
      searchTerm.trim() !== '' ||
      ingredientFilter.trim() !== '' ||
      maxPrepTime !== ''
    );
  },

  // ---- ACTIONS: CRUD setRecipes ----
  addRecipe: (newRecipe) => {
    set(
      (state) => ({
        recipes: [...state.recipes, newRecipe],
      }),
      false,
      'addRecipe'
    );

    if (get().hasActiveFilters()) {
      get().filterRecipes();
    }
  },

  updateRecipe: (updatedRecipe) => {
    set(
      (state) => ({
        recipes: state.recipes.map((recipe) =>
          recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
        ),
      }),
      false,
      'updateRecipe'
    );

    if (get().hasActiveFilters()) {
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

    if (get().hasActiveFilters()) {
      get().filterRecipes();
    }
  },

  // ------- FILTER ACTIONS -------
  setSearchTerm: (term) => {
    set({ searchTerm: term }, false, 'setSearchTerm');
    get().filterRecipes();
  },

  setIngredientFilter: (ingredient) => {
    set({ ingredientFilter: ingredient }, false, 'setIngredientFilter');
    get().filterRecipes();
  },

  setMaxPrepTime: (value) => {
    set({ maxPrepTime: value }, false, 'setMaxPrepTime');
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm, ingredientFilter, maxPrepTime } = get();

    const q = searchTerm.toLowerCase().trim();
    const ingredientQ = ingredientFilter.toLowerCase().trim();
    const max = maxPrepTime ? Number(maxPrepTime) : null;

    const filtered = recipes.filter((recipe) => {
      let match = true;

      // free-text search (title + description)
      if (q) {
        const inTitle = recipe.title.toLowerCase().includes(q);
        const inDescription = recipe.description.toLowerCase().includes(q);
        match = match && (inTitle || inDescription);
      }

      // ingredient filter
      if (ingredientQ) {
        const hasIngredient =
          Array.isArray(recipe.ingredients) &&
          recipe.ingredients.some((ing) =>
            ing.toLowerCase().includes(ingredientQ)
          );
        match = match && hasIngredient;
      }

      // max prep time filter
      if (max !== null && !Number.isNaN(max)) {
        match =
          match &&
          typeof recipe.prepTime === 'number' &&
          recipe.prepTime <= max;
      }

      return match;
    });

    set({ filteredRecipes: filtered }, false, 'filterRecipes');
  },
}));  
