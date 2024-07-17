import Card from "../Card";

import "./Services.scss";

import services from "../../data/card.json";

const Services = () => {
  return (
    <div className="card-container">
      {services.map((service) => (
        <Card
          key={service.id}
          imgAlt={service.img.alt}
          imgSrc={service.img.src}
          content={service.description}
        />
      ))}
    </div>
  );
};

export default Services;
