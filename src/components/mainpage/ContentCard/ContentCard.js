import React, { useState } from "react";
import useDataFetching from "../../../useDataFetching";
import ButtonNext from "./buttons/ButtonNext";
import ButtonPrev from "./buttons/ButtonPrev";

function ContentCard({ CategoryName, url, setMovieDetails }) {
  const [resultPage, setResultPage] = useState(1);
  const [movieIndexSlice, setMovieIndexSlice] = useState([0, 7]);
  
  //simple custom hook to handle async fetching and returns results
  const { loading, results, error } = useDataFetching(`${url}&page=${resultPage}`);

  if (loading || error) {
    return loading ? <div className="loading">Loading...</div> : error.message;
  } else {
    return (
      <div className="content-card">
        <h1>{CategoryName}</h1>
        <ButtonPrev
          resultPage={resultPage}
          setResultPage={setResultPage}
          movieIndexSlice={movieIndexSlice}
          setMovieIndexSlice={setMovieIndexSlice}
        />
        {/*I'm using slice because the number of results from api is hard set to 20.
        buttons set movieIndexSlice to different values*/}
        {results
          .slice(movieIndexSlice[0], movieIndexSlice[1])
          .map((movie, index) => (
            <li key={movie.id}>
              <img
                onClick={() =>
                  setMovieDetails(
                    results.slice(movieIndexSlice[0], movieIndexSlice[1])[index]
                  )
                }
                alt={movie.title ? movie.title : movie.original_name}
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              ></img>
              <p>{movie.title ? movie.title : movie.original_name}</p>
            </li>
          ))}
        <ButtonNext
          setResultPage={setResultPage}
          movieIndexSlice={movieIndexSlice}
          setMovieIndexSlice={setMovieIndexSlice}
        />
      </div>
    );
  }
}

export default ContentCard;
