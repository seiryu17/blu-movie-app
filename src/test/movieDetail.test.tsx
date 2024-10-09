import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieDetail from '../components/MovieDetail';
import { Movie } from '../types/Movie';

const mockMovie: Movie = {
  id: 1,
  title: "Despicable Me 4",
  release_date: "2024-06-20",
  poster_path: "/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
  overview: "Gru and Lucy and their girls welcome a new member to the family.",
  vote_average: 7.5,
  credits: {
    cast: [
      { id: 1, name: "Steve Carell", character: "Gru" },
      { id: 2, name: "Kristen Wiig", character: "Lucy" },
    ],
    director: "Kyle Balda"
  },
  genres: [
    { id: 16, name: "Animation" },
    { id: 10751, name: "Family" }
  ]
};

describe('MovieDetail Component', () => {
  test('renders movie details correctly', () => {
    render(<MovieDetail movie={mockMovie} />);

    const movieTitle = screen.getByText(/Despicable Me 4/i);
    expect(movieTitle).toBeInTheDocument();

    const movieOverview = screen.getByText(/Gru and Lucy and their girls welcome a new member to the family./i);
    expect(movieOverview).toBeInTheDocument();

    const movieReleaseDate = screen.getByText(/Release Date: 6\/20\/2024/i);
    expect(movieReleaseDate).toBeInTheDocument();

    const movieVoteAverage = screen.getByText(/Rating: 7.5/i);
    expect(movieVoteAverage).toBeInTheDocument();

    const moviePoster = screen.getByAltText(/Despicable Me 4/i);
    expect(moviePoster).toBeInTheDocument();

    expect(screen.getByText(/Steve Carell/i)).toBeInTheDocument();
    expect(screen.getByText(/Kristen Wiig/i)).toBeInTheDocument();

    expect(screen.getByText(/Kyle Balda/i)).toBeInTheDocument();
  });
});
