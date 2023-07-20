import React from "react";
import "./Card.css";

const Card = ({ num, onClick, isFlipped, visible }) => {
  return (
    <div
      className={"container" + (isFlipped ? " flipped" : "")}
      onClick={!isFlipped && visible ? onClick : null}
    >
      {visible && (
        <div className="card">
          <div className="card-front">
            <h2>{num}</h2>
          </div>
          <div className="card-back"></div>
        </div>
      )}
    </div>
  );
};

export default Card;
