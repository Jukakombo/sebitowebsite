import Link from "next/link";
import React from "react";

const FoodCard = ({ data }) => {
  const { image, name, designation } = data;

  return (
    <a href="/fooditems">
      <div className="team-one__single">
        <div className="team-one__image">
          <img src={image} alt={name} />
        </div>
        <div className="team-one__content">
          <h3>{name}</h3>
          <p>{designation}</p>
        </div>
      </div>
    </a>
  );
};

export default FoodCard;
