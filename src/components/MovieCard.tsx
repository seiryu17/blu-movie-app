import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../assets/notfound.png";
import { Movie } from "../types/Movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="block">
      <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImage
          }
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white truncate">
            {movie.title}
          </h3>
          <p className="text-sm text-gray-400">{movie.release_date}</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white text-lg font-bold">View Details</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
