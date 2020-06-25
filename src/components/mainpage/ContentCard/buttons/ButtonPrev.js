import React from "react";
import arrow from "./arrow.svg";

function ButtonPrev({
  page,
  setResultPage,
  movieIndexSlice,
  setMovieIndexSlice,
}) {
  const handleClickPrev = () => {
    if (movieIndexSlice[0] === 0 && page > 1) {
      setResultPage((prevResultPage) => prevResultPage - 1);
    } else if (movieIndexSlice[0] === 7) {
      setMovieIndexSlice([0, 7]);
    } else if (movieIndexSlice[0] === 14) {
      setMovieIndexSlice([7, 14]);
    }
  };

  return (
    <button onClick={handleClickPrev} className="btn-prev">
      <img src={arrow}></img>
    </button>
  );
}

export default ButtonPrev;
