import React from "react";
import Layout from "@components/layout";
import HeaderTwo from "@components/header-two";
import BmSecondContent from "@components/bm-second-content-card";
import PageHeader from "@components/page-header";
import Brand from "@components/brand";
import Footer from "@components/footer";
import MobileNav from "@components/mobile-nav";

const Bmscontent = () => {
  return (
    <Layout pageTitle="JB General Trading Co. Ltd">
      <HeaderTwo />
      <MobileNav />
      <PageHeader title={`Building Materials Details`} />
      <BmSecondContent />
      <Brand />
      <Footer />
    </Layout>
  );
};

export default Bmscontent;
