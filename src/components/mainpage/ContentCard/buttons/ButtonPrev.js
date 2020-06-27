import React from "react";
import arrow from "./arrow.svg";

function ButtonPrev({
  resultPage,
  setResultPage,
  movieIndexSlice,
  setMovieIndexSlice,
  enablePrevButton
}) {
  const handleClickPrev = () => {
    //changes index of movie.slice to display new results or sets resultsPage to trigger new fetch
    if (movieIndexSlice[0] === 0 && resultPage > 1) {
      setResultPage((prevResultPage) => prevResultPage - 1);
      setMovieIndexSlice([14, 20])
    } else if (movieIndexSlice[0] === 7) {
      setMovieIndexSlice([0, 7]);
    } else if (movieIndexSlice[0] === 14) {
      setMovieIndexSlice([7, 14]);
    }
  };

  return (
    <button onClick={handleClickPrev} id="btn-disabled" className={enablePrevButton ? "btn-prev": null}>
      <img src={arrow}></img>
    </button>
  );
}

export default ButtonPrev;
