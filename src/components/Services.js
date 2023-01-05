import React from "react";
import { services } from "../data";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          <Title title="our" subTitle="services" />
        </h2>
      </div>
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
