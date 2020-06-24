import React, { useState } from "react";
import useDataFetching from "../../useDataFetching";
import ButtonNext from "./ButtonNext";
import ButtonPrev from "./ButtonPrev";

function ContentCard({ name, url }) {
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
        {(show2ndHalf ? results2 : results1).map((movie) => (
          <li key={movie.id}>
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
