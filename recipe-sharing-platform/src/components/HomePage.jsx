import { useEffect, useState } from "react";
import data from "../data.json";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Loading mock data from local JSON on mount
    setRecipes(data);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Featured Recipes</h2>
        <p className="text-sm text-slate-600">{recipes.length} recipes</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <article
            key={recipe.id}
            className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[3/2] w-full overflow-hidden bg-slate-100">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">
                {recipe.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                {recipe.summary}
              </p>

              <div className="mt-4">
                {/* Link to detail page */}
                <a
                  href={`/recipes/${recipe.id}`}
                  className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  View recipe
                  <span className="ml-1 transition group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}