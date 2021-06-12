import React from "react";
import { Container } from "react-bootstrap";
import {
  BUILDING_PRODUCT_DATA,
  DRINK_PRODUCT_DATA,
  FOOD_PRODUCT_DATA,
  NONE_FOOD_PRODUCT_DATA,
} from "@data/index";
import OurProductCard from "./our-product-card-building";
import OurProductCardFoodItem from "./our-product-card-food";
import OurProductNoneFoodItemCard from "./our-product-card-nonefooditem";
import DrinksCard from "./our-product-drinks-card";

const OurProducts = () => {
  return (
    <section className="team-one" id="">
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
          {BUILDING_PRODUCT_DATA.map((building) => (
            <OurProductCard
              key={`team-card-key-${building._id}`}
              data={building}
            />
          ))}

          {FOOD_PRODUCT_DATA.map((food) => (
            <OurProductCardFoodItem
              key={`team-card-key-${food._id}`}
              data={food}
            />
          ))}
          {NONE_FOOD_PRODUCT_DATA.map((food) => (
            <OurProductNoneFoodItemCard
              key={`team-card-key-${food._id}`}
              data={food}
            />
          ))}
          {DRINK_PRODUCT_DATA.map((drink) => (
            <DrinksCard key={`team-card-key-${drink._id}`} data={drink} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurProducts;
