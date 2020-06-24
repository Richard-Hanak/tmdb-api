import React, { useState } from "react";

function SearchBar({ setSearch }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => setSearch(input)}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
