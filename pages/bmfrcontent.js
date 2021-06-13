import React from "react";
import Layout from "@components/layout";
import HeaderTwo from "@components/header-two";
import BmFourthContent from "@components/bm-fourth-content-card";
import PageHeader from "@components/page-header";
import Brand from "@components/brand";
import Footer from "@components/footer";
import MobileNav from "@components/mobile-nav";

const Bmfrcontent = () => {
  return (
    <Layout pageTitle="JB General Trading Co. Ltd">
      <HeaderTwo />
      <MobileNav />
      <PageHeader title={`Building Materials Details`} />
      <BmFourthContent />
      <Brand />
      <Footer />
    </Layout>
  );
};

export default Bmfrcontent;
