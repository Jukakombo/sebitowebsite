import React from "react";
import Layout from "@components/layout";
import HeaderOne from "@components/header-one";
import MobileNav from "@components/mobile-nav";
import Subscribe from "@components/subscribe";
import Footer from "@components/footer";
import ContactFunction from "@components/contact-function";

const Contactdashboard = () => {
  return (
    <Layout pageTitle="JB General Trading Co.Ltd">
      <HeaderOne />
      <MobileNav />
      <ContactFunction />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default Contactdashboard;
