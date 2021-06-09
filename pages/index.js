import React from "react";
import Layout from "@components/layout";
import HeaderOne from "@components/header-one";
import MobileNav from "@components/mobile-nav";
import SliderOne from "@components/slider-one";
import About from "@components/about";
import Services from "@components/services";
import Project from "@components/project";
import ProgressSection from "@components/progress-section";
import Team from "@components/team";
import Price from "@components/price";
import ContactTop from "@components/contact-top";
import ContactForm from "@components/contact-form";
import BlogHome from "@components/blog-home";
import Subscribe from "@components/subscribe";
import Footer from "@components/footer";
import OurProduct from "@components/our-products";
const Index = () => {
  return (
    <Layout pageTitle="JB General Trading Co.Ltd">
      <HeaderOne />
      <MobileNav />
      <SliderOne />
      <OurProduct />
      <About />
      <Services />

      <Team />
      <ContactTop />
      <ContactForm />

      <Project />
      <BlogHome />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default Index;
