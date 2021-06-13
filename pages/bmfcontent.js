import React from "react";
import Layout from "@components/layout";
import HeaderTwo from "@components/header-two";
import BmFirstContent from "@components/bm-first-content";
import PageHeader from "@components/page-header";
import Brand from "@components/brand";
import Footer from "@components/footer";
import MobileNav from "@components/mobile-nav";

const bmfcontent = () => {
  return (
    <Layout pageTitle="JB General Trading Co. Ltd">
      <HeaderTwo />
      <MobileNav />
      <PageHeader title={`Building Materials Details`} />
      <BmFirstContent />
      <Brand />
      <Footer />
    </Layout>
  );
};

export default bmfcontent;
