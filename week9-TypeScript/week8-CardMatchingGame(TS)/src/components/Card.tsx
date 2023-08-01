import React from "react";
import "./Card.css";

type CardProps = {
  children: React.ReactNode;
  num: number;
  onClick: () => void;
  isFlipped: boolean;
  visible: boolean;
};

const Card: React.FC<CardProps> = ({ num, onClick, isFlipped, visible }) => {
  return (
    <div
      className={"container" + (isFlipped ? " flipped" : "")}
      onClick={!isFlipped && visible ? onClick : undefined}
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
