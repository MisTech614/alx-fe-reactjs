import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-emerald-600">
            Recipe Sharing Platform
          </h1>
          <button className="rounded-full border px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50">
            Add Recipe
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 mx-auto max-w-5xl px-4 py-8">
        <h2 className="text-2xl font-bold text-blue-500">
          Featured Recipes
        </h2>

        {/* Example of a recipe card */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

          {/* More cards will go here later */}

        </div>
        <HomePage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-4 py-4 text-xs text-slate-500 text-center">
          Built with React & Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
export default App;