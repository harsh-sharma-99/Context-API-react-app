import React from "react";
import MoviesProvider from "./MoviesProvider";
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

const App = () => {
  return (
    <MoviesProvider>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <AddMovie />
        <MovieList />
      </div>
    </MoviesProvider>
  );
};

export default App;
