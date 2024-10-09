import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";
import Loader from "../components/Loader";
import MovieDetail from "../components/MovieDetail";

const MoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { movie, loading, error } = useMovieDetail(Number(id));
  const navigate = useNavigate();

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-red-500">{error}</p>
      </div>
    );

  if (!movie) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <button
        onClick={() => navigate("/", { state: { fromMoviePage: true } })}
        className="text-blue-400 underline mb-4 transition duration-300 hover:text-blue-300"
      >
        &larr; Back to Movies
      </button>
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl w-full">
        <MovieDetail movie={movie} />
      </div>
    </div>
  );
};

export default MoviePage;
