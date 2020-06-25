import React from "react";
import arrow from "./arrow.svg";

//changes index of movie.slice to display new results or sets results page to trigger new fetch
function ButtonNext({ setResultPage, movieIndexSlice, setMovieIndexSlice }) {
  const handleClickNext = () => {
    if (movieIndexSlice[0] === 0) {
      setMovieIndexSlice([7, 14]);
    } else if (movieIndexSlice[0] === 7) {
      setMovieIndexSlice([14, 20]);
    } else if (movieIndexSlice[0] === 14) {
      return (
        setMovieIndexSlice([0, 7]),
        setResultPage((prevResultPage) => prevResultPage + 1)
      );
    }
  };

  return (
    <button onClick={handleClickNext} className="btn-next">
      <img src={arrow}></img>
    </button>
  );
}

export default ButtonNext;
