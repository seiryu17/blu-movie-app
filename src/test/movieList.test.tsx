import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieList from '../components/MovieList';
import { Movie } from '../types/Movie';

jest.mock('../components/MovieCard', () => {
  return function MockMovieCard({ movie }: { movie: Movie }) {
    return <div>{movie.title}</div>;
  };
});

jest.mock('../components/Loader', () => {
  return function MockLoader() {
    return <div>Loading...</div>;
  };
});

const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Despicable Me 4",
    release_date: "2024-06-20",
    poster_path: "/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
    overview: "Gru and Lucy and their girls welcome a new member to the family.",
    vote_average: 7.5,
    genres: [
      { id: 16, name: "Animation" },
      { id: 10751, name: "Family" }
    ]
  }
];

describe('MovieList Component', () => {
  beforeEach(() => {
  });

  test('renders a list of movies', () => {
    render(<MovieList movies={mockMovies} onLoadMore={() => { }} loading={false} />);

    expect(screen.getByText(/Despicable Me 4/i)).toBeInTheDocument();
  });

  test('calls onLoadMore when the button is clicked', () => {
    const mockOnLoadMore = jest.fn();
    render(<MovieList movies={mockMovies} onLoadMore={mockOnLoadMore} loading={false} />);

    const loadMoreButton = screen.getByRole('button', { name: /load more/i });
    fireEvent.click(loadMoreButton);

    expect(mockOnLoadMore).toHaveBeenCalledTimes(1);
  });

  test('disables button and shows loading state when loading is true', () => {
    render(<MovieList movies={mockMovies} onLoadMore={() => { }} loading={true} />);

    const loadMoreButton = screen.getByRole('button');

    expect(loadMoreButton).toBeDisabled();

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
