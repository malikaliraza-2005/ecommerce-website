import React from "react";
import "./homeoutdoor-section.css";
import CategoryGridCards from "./card-components/category-grid-cards";
import sofa from "../assets/assets2/Image/interior/sofa.png";
import lamp from "../assets/assets2/Image/interior/lamp.png";
import coffeemachine from "../assets/assets2/Image/interior/coffeemachine.png";
import juicemachine from "../assets/assets2/Image/interior/juicemachine.png";
import matress from "../assets/assets2/Image/interior/matress.png";
import pot from "../assets/assets2/Image/interior/pot.png";
import plant from "../assets/assets2/Image/interior/plant.png";

const HomeOutdoorSection = () => {
  return (
    <div className="homeoutdoor-section ">  
      <div className="homeoutdoor-left"></div>
      <div className="homeoutdoor-right">
        <div className="right1">
                  <CategoryGridCards title="Soft Chairs" description="From USD $19" image={sofa}/>
                  <CategoryGridCards title="Sofa & Chairs" description="Stylish and comfortable seating" image={lamp}/>
                  <CategoryGridCards title="KItchen Dishes" description="Essential kitchenware" image={matress}/>
                  <CategoryGridCards title="Smart Watches" description="Wearable technology for fitness and style" image={pot}/>
                  </div>
                  <div className="right2">
                  <CategoryGridCards title="Coffee Machines" description="High-quality coffee makers" image={juicemachine}/>
                  <CategoryGridCards title="Plants & Flowers" description="Beautiful indoor plants and flowers" image={plant}/>
                  <CategoryGridCards title="Juice Machines" description="Fresh juice extraction machines" image={coffeemachine}/>
                  <CategoryGridCards title="Home Appliances" description="Modern home appliances" image={sofa}/>
                  </div>


        </div>
      </div>
    

  );
}      
  export default HomeOutdoorSection;
