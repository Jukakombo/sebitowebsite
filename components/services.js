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
          <h5>
            JB General Trading Co. Ltd <br />{" "}
            <span>
              is administered and operated by a fully experienced and qualified
              professional team of managers, marketers, staff and skillful
              working force to enhance best service delivery to our esteem
              customers.
            </span>
          </h5>
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
