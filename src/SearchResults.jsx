import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [noResult, setNoResult] = useState(false);

  const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchId = slugify(query.trim());

    if (!searchId) return;

    const element = document.getElementById(searchId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setNoResult(false);
    } else {
      setNoResult(true);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setNoResult(false);
        }}
        className="w-full py-2 px-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-500"
      >
        🔍
      </button>

      {noResult && (
        <p className="text-red-500 text-sm mt-2">No results found.</p>
      )}
    </form>
  );
};

export default SearchBar;
