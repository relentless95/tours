import React from "react";
import { useState } from "react";

const Tour = ({ id, info, name, price, image, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt="image" className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          onClick={() => {
            removeTour(id);
          }}
          type="button"
          className="btn btn-block delete-btn"
        >
          remove
        </button>
      </div>
    </article>
  );
};

export default Tour;
