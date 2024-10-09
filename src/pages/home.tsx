import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import { useMovies } from "../hooks/useMovies";
import Hero from "../components/Hero";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("popular");
  const [page, setPage] = useState(1);
  const movieListRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { movies, loading, error, totalPages } = useMovies(
    category,
    searchQuery,
    page
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setSearchQuery("");
    setPage(1);
  };

  useEffect(() => {
    if (location.state?.fromMoviePage) {
      movieListRef.current?.scrollIntoView({ behavior: "smooth" });

      navigate(".", { replace: true });
    }
  }, [location.state, navigate]);
  return (
    <div className="bg-gray-900 text-white">
      <Hero
        onExploreClick={() =>
          movieListRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <div className="py-3 px-6 md:px-12 md:py-3" ref={movieListRef}>
        <h2 className="text-3xl font-bold text-white mb-6">Movie List</h2>

        <div className="mb-4">
          <span className="text-lg font-semibold mr-2">Filter by:</span>
          <select
            className="bg-gray-800 text-white p-2 rounded"
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="now_playing">Now Playing</option>
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>

        <SearchBar onSearch={handleSearch} />
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
      <div className="py-3 px-6 md:px-12 md:py-3">
        {loading ? (
          <Loader />
        ) : (
          <MovieList
            movies={movies}
            onLoadMore={loadMore}
            loading={loading}
            totalPages={totalPages}
            currentPage={page}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
