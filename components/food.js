import React from "react";
import { Container } from "react-bootstrap";

import { BUILDING_DATA, PRODUCT_DATA, TEAM_DATA } from "@data/index";

import BuildingMaterialCard from "./building-material-card";

const Food = () => {
  return (
    <section className="team-one" id="team">
      <Container>
        <div className="block-title text-center">
          <p>
            <span></span>BUILDING MATERIALS
          </p>
          <h4>
            JB General Trading Co. Ltd work hand-to-hand with our producers to
            ensure effective and non-stop importation of our products in Juba,
            South Sudan.
          </h4>
        </div>

        <div className="team-one__4-col">
          {BUILDING_DATA.map((team, index) => (
            <BuildingMaterialCard key={`team-card-key-${index}`} data={team} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Food;
