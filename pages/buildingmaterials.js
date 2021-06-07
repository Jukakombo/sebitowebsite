import React from "react";
import Layout from "@components/layout";
import HeaderOne from "@components/header-one";
import MobileNav from "@components/mobile-nav";
import BuildingMaterials from "@components/building-materials";
import Footer from "@components/footer";
const Buildingmaterial = () => {
  return (
    <Layout pageTitle="JB General Trading Co.Ltd">
      <HeaderOne />

      <BuildingMaterials />
      <Footer />
    </Layout>
  );
};

export default Buildingmaterial;
