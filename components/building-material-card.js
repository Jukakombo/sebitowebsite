import React from "react";
import { useRouter } from "next/router";

const BuildingMaterialCard = ({ data }) => {
  const router = useRouter();
  const { image, name, designation } = data;

  return (
    <a href="/bmfcontent">
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

export default BuildingMaterialCard;
