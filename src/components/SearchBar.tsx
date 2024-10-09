// src/components/SearchBar.tsx
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // Local state for the input

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    setQuery(""); // Clear input after submission
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mb-4 flex flex-col md:flex-row md:items-center md:gap-4"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update local state on input change
        placeholder="Search for a movie..."
        className="border border-gray-300 rounded-md p-3 w-full md:w-1/2 text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded-md p-3 mt-3 md:mt-0 shadow-md hover:bg-blue-700 transition duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
