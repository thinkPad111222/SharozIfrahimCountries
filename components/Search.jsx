import React from "react";

export default function Search({ setQuery }) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass" />
      <input
        type="text"
        onInput={(e) => setQuery(e.target.value)}
        placeholder="Search for a country..."
      />
    </div>
  );
}
