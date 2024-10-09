export interface CrewMember {
  id: number;
  name: string;
  job: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
}

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string | null;
  overview: string;
  vote_average: number;
  genres: Array<{ id: number; name: string }>;
  credits?: {
    cast: CastMember[];
    director: string;
  };
}
