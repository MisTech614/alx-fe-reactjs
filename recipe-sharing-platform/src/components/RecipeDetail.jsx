import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const recipeId = useMemo(() => Number(id), [id]);

  useEffect(() => {
    const found = data.find((r) => r.id === recipeId);
    setRecipe(found || null);
  }, [recipeId]);

  if (!recipe) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Recipe not found</h2>
          <p className="mt-2 text-sm text-slate-600">
            The recipe you’re looking for doesn’t exist.
          </p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700"
      >
        ← Back
      </Link>

      <div className="mt-4 overflow-hidden rounded-2xl border bg-white shadow-sm">
        <div className="aspect-[16/9] w-full bg-slate-100">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold text-slate-900">{recipe.title}</h1>
          <p className="mt-2 text-slate-600">{recipe.summary}</p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Ingredients */}
            <section className="rounded-xl border bg-slate-50 p-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Ingredients
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {(recipe.ingredients || []).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Instructions */}
            <section className="rounded-xl border bg-slate-50 p-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Cooking Instructions
              </h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
                {(recipe.instructions || []).map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}