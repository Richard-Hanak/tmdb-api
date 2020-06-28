import React, { useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function MovieDetails({ movieDetails, setMovieDetails, setPlay }) {

  const enableElement = document.getElementsByClassName("movie-details");
  // disables scroll except for this modal element
  useEffect(() => {
    const disableScroll = () => {
      disableBodyScroll(enableElement);
    };
    disableScroll();
  }, [enableElement]);

  return (
    <div className="background-wrap">
      <div className="content-wrap">
        <button
          className="exit"
          onClick={() => {
            return (setMovieDetails(), enableBodyScroll(enableElement))
          }}
        >
          X
        </button>
        <div className="movie-details">
          <h2 className="title">
            {movieDetails.title || movieDetails.original_name}
          </h2>
          <p className="description">{movieDetails.overview}</p>
          <div className="util">
            <p>Rating: {movieDetails.vote_average}</p>
            <p>
              Release:{" "}
              {(
                movieDetails.release_date || movieDetails.first_air_date
              ).substring(0, 4)}
            </p>
          </div>{" "}
          <button className="play" onClick={() => setPlay(true)}>
            PLAY
          </button>
        </div>
        <img
          className="img"
          alt={movieDetails.title}
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        ></img>
      </div>
    </div>
  );
}

export default MovieDetails;
