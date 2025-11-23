// src/store/recipeStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecipeStore = create(
  persist(
    (set, get) => ({
      // ---- MAIN STATE ----
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

      // ---- FAVORITES / RECOMMENDATIONS ----
      favorites: [],          // array of recipe IDs
      recommendations: [],    // array of recipe objects

      // ---- SEARCH / FILTER STATE ----
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

      // ---- ACTIONS: CRUD ----
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

      // ------- FAVORITES ACTIONS -------
      addFavorite: (recipeId) =>
        set(
          (state) => ({
            favorites: [...state.favorites, recipeId],
          }),
          false,
          'addFavorite'
        ),

      removeFavorite: (recipeId) =>
        set(
          (state) => ({
            favorites: state.favorites.filter((id) => id !== recipeId),
          }),
          false,
          'removeFavorite'
        ),

      toggleFavorite: (recipeId) => {
        const { favorites, addFavorite, removeFavorite } = get();
        if (favorites.includes(recipeId)) {
          removeFavorite(recipeId);
        } else {
          addFavorite(recipeId);
        }
      },

      // ------- RECOMMENDATIONS ACTION -------
      generateRecommendations: () => {
        const { recipes, favorites } = get();

        const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));
        let recommended = [];

        if (favoriteRecipes.length > 0) {
          const favoriteIngredients = new Set(
            favoriteRecipes.flatMap((r) => r.ingredients || [])
          );

          recommended = recipes.filter((recipe) => {
            if (favorites.includes(recipe.id)) return false; // don’t recommend already-favorited

            return (
              recipe.ingredients &&
              recipe.ingredients.some((ing) => favoriteIngredients.has(ing))
            );
          });
        }

        // Fallback: random non-favorite recipes
        if (recommended.length === 0) {
          recommended = recipes
            .filter((r) => !favorites.includes(r.id))
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        }

        set({ recommendations: recommended }, false, 'generateRecommendations');
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
    }),
    {
      name: 'recipe-store', // key in localStorage
    }
  )
);
