import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../types/Movie";

interface MovieListProps {
  movies: Movie[];
  onLoadMore: () => void;
  loading: boolean;
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  onLoadMore,
  loading,
}) => {
  const uniqueMovies = Array.from(new Set(movies.map((movie) => movie.id)))
    .map((id) => movies.find((movie) => movie.id === id))
    .filter((movie): movie is Movie => movie !== undefined);

  return (
    <div className="bg-gray-900 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {uniqueMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={onLoadMore}
          className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-all duration-300 ease-in-out ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default MovieList;
