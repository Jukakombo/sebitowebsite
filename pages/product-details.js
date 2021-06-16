import React from "react";
import Layout from "@components/layout";
import HeaderTwo from "@components/header-two";
import ProductDetailsComponent from "@components/product-details";
import PageHeader from "@components/page-header";
import Brand from "@components/brand";
import Footer from "@components/footer";
import MobileNav from "@components/mobile-nav";

const ProductDetails = () => {
  return (
    <Layout pageTitle="JB General Trading Co. Ltd">
      <HeaderTwo />
      <MobileNav />
      <PageHeader title={`Product Details`} />
      <ProductDetailsComponent />
      <Brand />
      <Footer />
    </Layout>
  );
};

export default ProductDetails;
