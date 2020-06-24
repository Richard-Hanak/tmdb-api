import React from "react";

function MovieDetails({ movieDetails, setMovieDetails }) {
    
  return (
  <div>
      <button onClick={() => setMovieDetails()}>X</button>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <p>Rating: {movieDetails.vote_average}</p>
      <p>Year: {movieDetails.release_date.substring(0,4)}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}></img>
      <button>PLAY</button>
  </div>);
}

export default MovieDetails;