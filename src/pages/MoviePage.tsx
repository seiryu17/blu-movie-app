// src/pages/MoviePage.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail"; // Import the custom hook
import Loader from "../components/Loader"; // Import a loader component for better UX
import MovieDetail from "../components/MovieDetail"; // Import the MovieDetail component

const MoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { movie, loading, error } = useMovieDetail(Number(id)); // Use the custom hook

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <Loader /> {/* Display the loader in the center */}
      </div>
    ); // Display a loader while fetching

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-red-500">{error}</p>
      </div>
    );

  if (!movie) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <Link
        to="/"
        className="text-blue-400 underline mb-4 inline-block transition duration-300 hover:text-blue-300"
      >
        &larr; Back to Movies
      </Link>
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl w-full">
        <MovieDetail movie={movie} />
      </div>
    </div>
  );
};

export default MoviePage;
