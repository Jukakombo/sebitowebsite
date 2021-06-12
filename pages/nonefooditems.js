import React from "react";
import Layout from "@components/layout";
import HeaderOne from "@components/header-one";
import MobileNav from "@components/mobile-nav";
// import NoneFoodItem from "none-food-items";
import Footer from "@components/footer";
import OurProduct from "@components/our-products";
import NoneFoodItem from "@components/none-food-items";
const NoneFood = () => {
  return (
    <Layout pageTitle="JB General Trading Co.Ltd">
      <HeaderOne />
      <MobileNav />
      <NoneFoodItem />
      <Footer />
    </Layout>
  );
};

export default NoneFood;
