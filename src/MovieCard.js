import React from "react";

const MovieCard = ({ name, rating, price }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Rating: {rating}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Price: {price}</h6>
      </div>
    </div>
  );
};

export default MovieCard;
