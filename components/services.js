import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "@components/service-card";
import { SERVICE_DATA } from "@data/index";

const Services = () => {
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get("/api/services");
  //     setServices(data);
  //   };
  //   fetchData();
  // }, []);
  return (
    <section className="service-one" id="services">
      <div className="container">
        <div className="block-title text-center">
          <p>
            <span></span>Who we are
          </p>
          <h3>
            Start Your Business with brainstorming <br />{" "}
            <span>Product Anything.</span>
          </h3>
        </div>
        <div className="service-one__3-col">
          {SERVICE_DATA.map((service, index) => (
            <ServiceCard data={service} key={`service-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
