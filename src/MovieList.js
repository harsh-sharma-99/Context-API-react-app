import React, { useContext } from "react";
import { MovieContext } from "./MoviesProvider";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie, idx) => (
        <MovieCard
          key={idx}
          name={movie.name}
          price={movie.price}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;
