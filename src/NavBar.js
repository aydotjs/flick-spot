import React from "react";
import NumResults from "./NumResults";
import Search from "./Search";

const NavBar = ({query, setQuery, movies }) => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>flick spot</h1>
      </div>
      <Search query = {query} setQuery = {setQuery} />
      <NumResults movies={movies} />
    </nav>
  );
};

export default NavBar;
