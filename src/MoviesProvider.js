import React, { useState, createContext } from "react";

export const MovieContext = createContext();

const MoviesProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      rating: 8,
      price: "$10",
    },
    {
      name: "Avengers",
      rating: 9.2,
      price: "$20",
    },
    {
      name: "Spiderman: No Way Home",
      rating: 10,
      price: "$10",
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MoviesProvider;
