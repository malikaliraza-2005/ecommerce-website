import React from "react";
import "./extra-services-section.css";
import ServicesCard from "./card-components/services-card";
import Service1 from "../assets/assets2/Image/backgrounds/service1.png";
import Service2 from "../assets/assets2/Image/backgrounds/service2.png";
import Service3 from "../assets/assets2/Image/backgrounds/service3.png";
import Service4 from "../assets/assets2/Image/backgrounds/service4.png";
const ExtraServicesSection = () => {
  return (
    <div className="extra-services-section">
      <div className="head">
        <h2>Our Extra Services</h2>
      </div>
      <div className="cards">
      <ServicesCard
        image={Service1}
        description="Source from Industry Hubs"
      />
      <ServicesCard
        image={Service2}
        description=" Customize your Products"
      />
      <ServicesCard
        image={Service3}
        description="Fat reliable, shipping by ocean or air"
      />    
      <ServicesCard
        image={Service4}
        description="Product monitoring and inspection"
      />
    </div>
    </div>
  );
}
export default ExtraServicesSection;