import { useState } from "react";
import NavBar from "./NavBar";
import Box from "./AllMovies";

import tempMovieData from "./TempMovieData";
import tempWatchedData from "./TempWatchedData";
import Search from "./Search";
import NumResults from "./NumResults";
import Logo from "./Logo";
import Main from "./Main";
import MovieList from "./MovieList";
import Summary from "./Summary";
import SeenMovieList from "./SeenMovieList";

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
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box isOpen={isOpen1} setIsOpen={setIsOpen1}>
          <MovieList movies={movies} />
        </Box>
        <Box isOpen={isOpen2} setIsOpen={setIsOpen2}>
          <Summary
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating}
            avgRuntime={avgRuntime}
          />
          <SeenMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
