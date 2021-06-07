import React from "react";
import Layout from "@components/layout";
import HeaderOne from "@components/header-one";
import MobileNav from "@components/mobile-nav";
import Subscribe from "@components/subscribe";
import Footer from "@components/footer";
import Link from "next/link";

const Index = () => {
  return (
    <Layout pageTitle="JB General trading Co.Ltd">
      <HeaderOne />
      <MobileNav />
      <div className="about-one__content">
        <div className="block-title text-center">
          <h5>Hello!</h5>

          <p>
            Thank You! We have received your request and one of our team members
            will get back to you in a promptly manner.
          </p>

          <p>
            Our dedicated team is actively working to have an answer for you in
            a window of 12 to 24 hours at the most.
          </p>

          <p>You are our always our priority!</p>

          <p>Have an amazing day!</p>
          <Link href="/">
            <a>Back/Home</a>
          </Link>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default Index;
