import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const items = ingredients
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      if (items.length < 2) {
        newErrors.ingredients =
          "Please include at least two ingredients (comma separated)";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients,
      steps,
    };

    console.log("Recipe submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:px-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Add New Recipe
      </h2>

      <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl bg-white p-4 md:p-6 shadow-sm border"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="e.g. Spaghetti Carbonara"
          />
          {errors.title && (
            <p className="mt-1 text-xs text-red-600">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Ingredients
          </label>
          <textarea
            rows={4}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Enter ingredients separated by commas"
          />
          {errors.ingredients && (
            <p className="mt-1 text-xs text-red-600">
              {errors.ingredients}
            </p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Preparation Steps
          </label>
          <textarea
            rows={5}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Describe the cooking steps..."
          />
          {errors.steps && (
            <p className="mt-1 text-xs text-red-600">{errors.steps}</p>
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-emerald-600 px-6 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
