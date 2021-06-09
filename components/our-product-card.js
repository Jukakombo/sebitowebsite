import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const OurProductCard = ({ data }) => {
  const router = useRouter();
  const { image, name, designation } = data;
  const productDetail = (e) => {
    e.preventDefault();
    router.push("/product-details");
  };
  return (
    <div className="team-one__single" onClick={productDetail}>
      <div className="team-one__image">
        <img src={image} alt={name} />
      </div>
      <div className="team-one__content">
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default OurProductCard;
