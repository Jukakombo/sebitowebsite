import React from "react";
import { Container } from "react-bootstrap";
import { NONE_FOOD_DATA } from "@data/index";
import { useRouter } from "next/router";
import NoneFoodItemCard from "./none-food-items-card";
import Link from "next/link";

const NoneFoodItem = () => {
  const router = useRouter();
  const nonefood = (e) => {
    e.preventDefault();
    router.push("/nonfooditems");
  };
  return (
    <section className="team-one" id="team">
      <Container>
        <div className="block-title text-center">
          <p>
            <span></span>NONE FOOD ITEMS
          </p>
          <h4>
            JB General Trading Co. Ltd work hand-to-hand with our producers to
            ensure effective and non-stop importation of our products in Juba,
            South Sudan.
          </h4>
        </div>

        <div className="team-one__4-col">
          {NONE_FOOD_DATA.map((team, index) => (
            <NoneFoodItemCard key={`team-card-key-${index}`} data={team} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NoneFoodItem;
