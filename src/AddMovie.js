import React, { useContext, useState } from "react";
import { MovieContext } from "./MoviesProvider";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const updateRating = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && rating !== "" && price !== "") {
      setMovies((prevMovies) => [
        ...prevMovies,
        { name: name, rating: rating, price: price },
      ]);
    }

    setName("");
    setPrice("");
    setRating("");
  };

  return (
    <div
      className="border border-4"
      style={{
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "30px 0px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="fw-bolder fs-3">Add a new movie</div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Movie Name"
            onChange={updateName}
            value={name}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Rating"
            onChange={updateRating}
            value={rating}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter price"
            onChange={updatePrice}
            value={price}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
