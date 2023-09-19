import { Children, useState } from "react";
import NavBar from "./NavBar";
import AllMovies from "./AllMovies";
import SeenMovies from "./SeenMovies";
import tempMovieData from "./TempMovieData";
import tempWatchedData from "./TempWatchedData";

const average = (arr) =>
  arr.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <NavBar>
        <nav className="nav-bar">
          <div className="logo">
            <span role="img">🍿</span>
            <h1>flick spot</h1>
          </div>
          <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <p className="num-results">
            Found <strong>{movies.length}</strong> results
          </p>
        </nav>
      </NavBar>
      <main className="main">
        <AllMovies isOpen1={isOpen1} setIsOpen1={setIsOpen1} movies={movies} />
        <SeenMovies
          isOpen2={isOpen2}
          setIsOpen2={setIsOpen2}
          watched={watched}
          avgImdbRating={avgImdbRating}
          avgUserRating={avgUserRating}
          avgRuntime={avgRuntime}
        />
      </main>
    </>
  );
}
