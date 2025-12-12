import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-emerald-600">
              Recipe Sharing Platform
            </h1>
            <Link
                to="/add"
                  className="rounded-full border px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50">
              Add Recipe
            </Link>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 mx-auto max-w-5xl px-4 py-8">
          <Routes>
            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <h2 className="text-2xl font-bold text-blue-500 mb-6">
                    Featured Recipes
                  </h2>

                  {/* Example recipe card (kept as requested) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <article className="rounded-2xl bg-white shadow-sm p-4 border">
                      <h3 className="font-semibold text-lg mb-2">
                        Creamy Garlic Pasta
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        A quick and delicious pasta dish with a rich, creamy
                        garlic sauce. Perfect for weeknight dinners.
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>⏱ 20 mins</span>
                        <span>⭐ 4.7</span>
                      </div>
                    </article>
                  </div>

                  {/* Dynamic recipe list */}
                  <HomePage />
                </>
              }
            />

            {/* RECIPE DETAIL PAGE */}
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add" element={<AddRecipeForm />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-4 text-xs text-slate-500 text-center">
            Built with React & Tailwind CSS
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App; 