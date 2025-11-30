import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.css";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>GitHub User Search</h1>
        <p>Search for GitHub profiles and view basic info.</p>
      </header>

      <main className="app-main">
        <SearchBar />

        {/* Temporary static example – will be replaced with real search results */}
        <section className="results">
          <h2>Example Result (Static)</h2>
          <UserCard
            username="octocat"
            avatarUrl="https://github.com/octocat.png"
            profileUrl="https://github.com/octocat"
          />
        </section>
      </main>
    </div>
  );
}
export default App;