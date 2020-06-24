import React from "react";
import "./App.css";
import ContentCard from "./ContentCard";

//`https://api.themoviedb.org/3/search/movie/?api_key=${api_key}&query=${search_movie}`

function App() {
  const api_key = "95c816e6bdf08cc11c213d169108e6d4"; // The api key would normally be requested from backend server for security.
  const search_movie = "hobbit";

  return (
    <div className="App">
      <ContentCard
        name={"Popular Movies"}
        url={`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`}
      />
      <ContentCard
        name={"Popular Tv Shows"}
        url={`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`}
      />
      <ContentCard
        name={"Documentary"}
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99&sort_by=vote_count.desc`}
      />
      <ContentCard
        name={"Family"}
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10751&sort_by=vote_count.desc`}
      />
    </div>
  );
}

export default App;
