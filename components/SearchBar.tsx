"use client";

import React from "react";

export const SearchBar = () => {
  const handleSubmit = () => {};
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        className="searchbar-input"
        placeholder="Enter Product Link"
      ></input>
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};
