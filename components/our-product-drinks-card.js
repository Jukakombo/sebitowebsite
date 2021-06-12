import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const DrinksCard = ({ data }) => {
  const router = useRouter();
  const nonefood = (e) => {
    e.preventDefault();
    router.push("/drinks");
  };
  const { _id, image, name, designation } = data;

  return (
    <>
      <div className="team-one__single">
        <Link href="/nonefooditems">
          <a>
            <div className="team-one__image">
              <img src={image} alt={name} />
            </div>
          </a>
        </Link>
        <div className="team-one__content">
          <h3>{name}</h3>
          <p>{designation}</p>
        </div>
      </div>
    </>
  );
};

export default DrinksCard;
