import React, { useState } from "react";
import ShakaPlayer from "shaka-player-react";
import 'shaka-player/dist/controls.css'

function MovieDetails({ movieDetails, setMovieDetails }) {
  const [play, setPlay] = useState(false);
  console.log(play)

  return (
    <div>
      {play ? (
        <ShakaPlayer
          autoPlay
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      ) : null}
      <button onClick={() => setMovieDetails()}>X</button>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <p>Rating: {movieDetails.vote_average}</p>
      <p>Year: {movieDetails.release_date.substring(0, 4)}</p>
      <img
        alt={movieDetails.title}
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
      ></img>
      <button onClick={() => setPlay(true)}>PLAY</button>
    </div>
  );
}

export default MovieDetails;
