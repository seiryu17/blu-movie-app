export interface CastMember {
  id: number;
  name: string;
  character: string; // The character they play in the movie
}

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string | null; // Ensure this is nullable
  overview: string;
  vote_average: number;
  genres: Array<{ id: number; name: string }>;
  credits?: {
    cast: CastMember[];
    director: string;
  };
}
