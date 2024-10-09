import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../types/Movie";

const API_URL = import.meta.env.VITE_API_URL;

export const useMovieDetail = (id: number) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setLoading(true);
      try {
        const movieResponse = await axios.get(`${API_URL}/movie/${id}`, {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
          },
        });

        const creditsResponse = await axios.get(
          `${API_URL}/movie/${id}/credits`,
          {
            params: {
              api_key: import.meta.env.VITE_API_KEY,
            },
          }
        );

        const movieData = {
          ...movieResponse.data,
          credits: {
            cast: creditsResponse.data.cast.slice(0, 5),
            director:
              creditsResponse.data.crew.find(
                (member: any) => member.job === "Director"
              )?.name || "Unknown",
          },
        };

        setMovie(movieData);
      } catch (err) {
        setError("Error fetching movie details");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  return { movie, loading, error };
};
