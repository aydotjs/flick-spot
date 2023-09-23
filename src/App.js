import { useState } from "react";
import NavBar from "./NavBar";
import AllMovies from "./AllMovies";
import SeenMovies from "./SeenMovies";
import tempMovieData from "./tempMovieData";
import tempWatchedData from "./tempWatchedMovie";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

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
      <NavBar query={query} setQuery={setQuery} movies={movies} />
      <main className="main">
        <AllMovies movies={movies} isOpen1={isOpen1} setIsOpen1={setIsOpen1} />
        <SeenMovies
          avgImdbRating={avgImdbRating}
          avgRuntime={avgRuntime}
          avgUserRating={avgUserRating}
          watched={watched}
          isOpen2={isOpen2}
          setIsOpen2={setIsOpen2}
        />
      </main>
    </>
  );
}
