import React from "react";
import Layout from "@components/layout";
import HeaderOne from "@components/header-one";
import MobileNav from "@components/mobile-nav";
import FoodItem from "@components/food-item";
import Footer from "@components/footer";
const Fooditem = () => {
  return (
    <Layout pageTitle="JB General Trading Co.Ltd">
      <HeaderOne />
      <MobileNav />
      <FoodItem />
      <Footer />
    </Layout>
  );
};

export default Fooditem;
