import React from "react";
import { Movie } from "../types/Movie";
import defaultImage from "../assets/notfound.png";

interface MovieDetailProps {
  movie: Movie | null;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="p-4 bg-gray-900 text-white">
      <div className="flex justify-center mb-4">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImage
          }
          alt={movie.title}
          className="rounded-lg mt-4 w-1/2"
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="mb-2">{movie.overview}</p>
      <p className="mb-2">
        Release Date: {new Date(movie.release_date).toLocaleDateString()}
      </p>
      <p className="mb-2">Rating: {movie.vote_average}</p>
      <h2 className="text-xl font-semibold mt-4">Main Cast:</h2>
      <ul className="mb-4">
        {movie.credits?.cast?.map((actor) => (
          <li key={actor.id} className="text-gray-400">
            {actor.name}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold">Director:</h2>
      <p className="text-gray-400 mb-4">{movie.credits?.director}</p>
    </div>
  );
};

export default MovieDetail;
