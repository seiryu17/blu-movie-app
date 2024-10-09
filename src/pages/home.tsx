import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieList from "../components/MovieList";
import { Movie } from "../types/Movie";

jest.mock("../components/MovieCard", () => {
  return function MockMovieCard({ movie }: { movie: Movie }) {
    return <div>{movie.title}</div>;
  };
});

jest.mock("../components/Loader", () => {
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
    overview:
      "Gru and Lucy and their girls welcome a new member to the family.",
    vote_average: 7.5,
    genres: [
      { id: 16, name: "Animation" },
      { id: 10751, name: "Family" },
    ],
  },
];

describe("MovieList Component", () => {
  test("renders a list of movies", () => {
    render(
      <MovieList
        movies={mockMovies}
        onLoadMore={() => {}}
        loading={false}
        totalPages={1}
        currentPage={1}
      />
    );

    expect(screen.getByText(/Despicable Me 4/i)).toBeInTheDocument();
  });

  test("calls onLoadMore when the button is clicked", () => {
    const mockOnLoadMore = jest.fn();
    render(
      <MovieList
        movies={mockMovies}
        onLoadMore={mockOnLoadMore}
        loading={false}
        totalPages={2}
        currentPage={1}
      />
    );

    const loadMoreButton = screen.getByRole("button", { name: /load more/i });
    fireEvent.click(loadMoreButton);

    expect(mockOnLoadMore).toHaveBeenCalledTimes(1);
  });

  test("disables button and shows loading state when loading is true", () => {
    render(
      <MovieList
        movies={mockMovies}
        onLoadMore={() => {}}
        loading={true}
        totalPages={2}
        currentPage={1}
      />
    );

    const loadMoreButton = screen.getByRole("button", { name: /load more/i });
    expect(loadMoreButton).toBeDisabled();

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test("shows message when at the end of the journey", () => {
    render(
      <MovieList
        movies={mockMovies}
        onLoadMore={() => {}}
        loading={false}
        totalPages={1}
        currentPage={1}
      />
    );

    expect(
      screen.getByText(/you are at the end of your journey/i)
    ).toBeInTheDocument();
  });

  test("shows Load More button when more pages are available", () => {
    render(
      <MovieList
        movies={mockMovies}
        onLoadMore={() => {}}
        loading={false}
        totalPages={2}
        currentPage={1}
      />
    );

    expect(
      screen.getByRole("button", { name: /load more/i })
    ).toBeInTheDocument();
  });

  test("does not show Load More button when at the last page", () => {
    render(
      <MovieList
        movies={mockMovies}
        onLoadMore={() => {}}
        loading={false}
        totalPages={1}
        currentPage={1}
      />
    );

    expect(
      screen.queryByRole("button", { name: /load more/i })
    ).not.toBeInTheDocument();
  });
});
