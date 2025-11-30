import { useState } from 'react'
import './App.css'
import "./index.css";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      <header className="app-header">
      <h1 className="text-4xl text-red-400 font-bold mb-2">GitHub User Search</h1>
        <p className="text-slate-300">
          Search GitHub users with advanced filters like location and repo
          count.
        </p>
      </header>
      <main className="app-main">
        <Search />
      </main>
    </div>
  );
}
export default App;

