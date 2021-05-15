import React from "react";
import Layout from "@components/layout";
import HeaderTwo from "@components/header-two";
import BlogPage from "@components/blog-page";
import PageHeader from "@components/page-header";
import Brand from "@components/brand";
import Footer from "@components/footer";
import MobileNav from "@components/mobile-nav";

const Blog = () => {
  return (
    <Layout pageTitle="Sebit bloq">
      <HeaderTwo />
      <MobileNav />
      <PageHeader title={`Blog Page`} />
      <BlogPage />
      <Brand />
      <Footer />
    </Layout>
  );
};

export default Blog;
