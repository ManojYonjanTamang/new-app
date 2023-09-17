import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className="main-card">
        <div className="main-card-image">
          <img src={props.imgsrc} alt="abcdefg" />
        </div>
        <div className="main-card-info">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
