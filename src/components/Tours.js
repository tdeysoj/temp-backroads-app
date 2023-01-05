import React from "react";
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          <Title title="featured" subTitle="tours" />
        </h2>
      </div>

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
