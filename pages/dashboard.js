import React from "react";
import Layout from "@components/layout";
import HeaderOne from "@components/header-one";
import MobileNav from "@components/mobile-nav";
import { useRouter } from "next/router";
import Footer from "@components/footer";
const Dashboard = () => {
  const router = useRouter();
  const openMessage = () => {
    //
    router.push("/receipt");
  };
  return (
    <Layout pageTitle="JB General Trading Co.Ltd">
      <HeaderOne />
      <MobileNav />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
      <div className="dashboard__css" onClick={openMessage}>
        <h5>dashboard</h5>
      </div>
      <Footer />
    </Layout>
  );
};

export default Dashboard;
