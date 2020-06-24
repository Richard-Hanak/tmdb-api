import React, { useState } from "react";
import useDataFetching from "../../useDataFetching";
import ButtonNext from "./ButtonNext";
import ButtonPrev from "./ButtonPrev";

function ContentCard({ name, url, setMovieDetails }) {
  const [page, setPage] = useState(1);
  const [show2ndHalf, setShow2ndHalf] = useState(false);

  const { loading, results1, results2, error } = useDataFetching(
    `${url}&page=${page}`
  );

  if (loading || error) {
    return loading ? <div>Loading...</div> : error.message;
  } else {
    return (
      <div className="App">
        <h1>{name}</h1>
        <ButtonPrev
          page={page}
          setPage={setPage}
          show2ndHalf={show2ndHalf}
          setShow2ndHalf={setShow2ndHalf}
        />
        {(show2ndHalf ? results2 : results1).map((movie, index) => (
          <li
            key={movie.id}
            onClick={() =>
              setMovieDetails(show2ndHalf ? results2[index] : results1[index])
            }
          >
            <p>{movie.title}</p>
            <img
              src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            ></img>
          </li>
        ))}
        <ButtonNext
          setPage={setPage}
          show2ndHalf={show2ndHalf}
          setShow2ndHalf={setShow2ndHalf}
        />
      </div>
    );
  }
}

export default ContentCard;
