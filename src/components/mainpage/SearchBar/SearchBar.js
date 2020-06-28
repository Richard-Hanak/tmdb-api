import React, { useState } from "react";
import search from "./search.svg";

function SearchBar({ setSearch }) {
  const [input, setInput] = useState("");

  return (
    <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
      <input onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => setSearch(input)}>
        <img src={search} alt="search"></img>
      </button>
    </form>
  );
}

export default SearchBar;
