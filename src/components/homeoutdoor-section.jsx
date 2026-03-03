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
      <div className="homeoutdoor-left">
        <div className="content">
                   <h2>Home and Outdoor</h2>
                   <button>Source Now</button>

        </div>
      </div>
      <div className="homeoutdoor-right">
        <div className="right1">
                  <CategoryGridCards title="Soft Chairs" description="From USD $19" image={sofa}/>
                  <CategoryGridCards title="Sofa & Chairs" description="From USD $19" image={lamp}/>
                  <CategoryGridCards title="KItchen Dishes" description="From USD $19" image={matress}/>
                  <CategoryGridCards title="Smart Watches" description="From USD $19" image={pot}/>
                  </div>
                  <div className="right2">
                  <CategoryGridCards title="Coffee Machines" description="From USD $100" image={juicemachine}/>
                  <CategoryGridCards title="Plants & Flowers" description="From USD $39" image={plant}/>
                  <CategoryGridCards title="Juice Machines" description="From USD $19" image={coffeemachine}/>
                  <CategoryGridCards title="Home Appliances" description="From USD $10" image={sofa}/>
                  </div>


        </div>
      </div>
    

  );
}      
  export default HomeOutdoorSection;
