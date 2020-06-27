import React from "react";
import arrow from "./arrow.svg";

function ButtonNext({
  setResultPage,
  movieIndexSlice,
  setMovieIndexSlice,
  CategoryName,
  setEnablePrevButton
}) {
  const handleClickNext = () => {
    //scrolls current content card back to beginning (mobile version)
   document.querySelectorAll(".content-card").forEach((e) => {
      return e.firstChild.innerHTML === CategoryName
        ? e.scrollTo({
            behavior: "smooth",
            left: 0,
          })
        : null;
    });
    setEnablePrevButton(true)
    //changes index of movie.slice to display new results or sets resultsPage to trigger new fetch
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
