import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../types/Movie";

const API_URL = import.meta.env.VITE_API_URL;

export const useMovies = (
  category: string,
  searchQuery: string,
  page: number
) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setError(null);

      try {
        const endpoint = searchQuery
          ? `${API_URL}/search/movie`
          : `${API_URL}/movie/${category}`;

        const response = await axios.get(endpoint, {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
            query: searchQuery || "",
            page,
          },
        });

        setMovies((prev) => [...prev, ...response.data.results]);
      } catch (err) {
        console.log(err)
        setError("Error fetching movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category, searchQuery, page]);

  useEffect(() => {
    setMovies([]);
  }, [searchQuery, category]);

  return { movies, loading, error };
};
