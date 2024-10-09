# Movie App

A React application that displays a list of movies fetched from The Movie Database (TMDB) API. This project is built using Vite, React, and Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [License](#license)

## Features

- View a list of movies.
- Search for movies by title.
- Load more movies as you scroll.
- Display movie details.

## Technologies Used

- React
- Vite
- Tailwind CSS
- TMDB API

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/movie-app.git
   cd movie-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of the project directory and add the following variables:

   ```bash
   VITE_API_KEY='c48d2bdb49f9541ac6ebcd368ac45226'
   VITE_API_URL='https://api.themoviedb.org/3'
   ```

## Running the Project

To run the project locally, use the following command:

```bash
npm run dev
```

This will start the development server, and you can view the application in your browser at `http://localhost:5173`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
