import React from "react";
import "./deals-section.css";
import Card from "./card-components/product-cards";
import "./card-components/date-time-cards.css";
import watch from "../assets/assets2/Image/tech/watch.png";
import laptop from "../assets/assets2/Image/tech/laptop.png";
import camera from "../assets/assets2/Image/tech/camera.png";
import headphone from "../assets/assets2/Image/tech/headphone.png";
import mobile from "../assets/assets2/Image/tech/mobile.png";
import DateTimeCard from "./card-components/date-time-cards";

const DealsSection = () => {
  return (
    <div className="deals-section">
      <div className="deal-section-left">
  <h2>Deals and Offers</h2>
  <p>Hygiene Equipments</p>
          <div className="date-time-cards">

  <DateTimeCard number="04" text="Days" />
    <DateTimeCard number="13" text="Hours" />
  <DateTimeCard number="34" text="Minutes" />
  <DateTimeCard number="13" text="Seconds " />
  </div>

  

</div>
<div className="deal-section-right">
  <div className="card">
<Card image={watch} title="iPhone 15" discount="-25% "  />
</div>
<div className="card">
<Card image={laptop} title="MacBook Pro" discount="-15% " />
</div>
<div className="card">
<Card image={camera} title="AirPods" discount="-40% " />
</div>
<div className="card">
<Card image={headphone} title="AirPods" discount="-25% " />
</div>
<div className="card">
<Card image={mobile} title="AirPods" discount="-25% " />
</div>

</div>
    </div>
  );
};

export default DealsSection;