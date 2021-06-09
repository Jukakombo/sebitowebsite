import React from "react";
import { Container } from "react-bootstrap";
import TeamCard from "@components/team-card";
import { PRODUCT_DATA, TEAM_DATA } from "@data/index";
import OurProductCard from "./our-product-card";

const OurProducts = () => {
  return (
    <section className="team-one" id="team">
      <Container>
        <div className="block-title text-center">
          <p>
            <span></span>OUR PRODUCTS
          </p>
          <h4>
            JB General Trading Co. Ltd work hand-to-hand with our producers to
            ensure effective and non-stop importation of our products in Juba,
            South Sudan.
          </h4>
        </div>

        <div className="team-one__4-col">
          {PRODUCT_DATA.map((team, index) => (
            <OurProductCard key={`team-card-key-${index}`} data={team} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurProducts;
