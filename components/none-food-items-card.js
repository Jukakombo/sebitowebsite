import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const NoneFoodItemCard = ({ data }) => {
  const { image, name, designation } = data;
  const router = useRouter();
  const nonefood = (e) => {
    e.preventDefault();
    router.push("/nonfooditems");
  };
  return (
    <a href="/nonfooditems">
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

export default NoneFoodItemCard;
