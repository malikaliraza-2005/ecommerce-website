import React from "react";
import "./consumerelectronic-section.css";
import CategoryGridCards from "./card-components/category-grid-cards";
import watch from "../assets/assets2/Image/tech/watch.png";
import camera from "../assets/assets2/Image/tech/camera.png";
import headphone2 from "../assets/assets2/Image/tech/headphone2.png";
import jug from "../assets/assets2/Image/tech/jug.png";
import headphone from "../assets/assets2/Image/tech/headphone.png";
import laptop from "../assets/assets2/Image/tech/laptop.png";
import tablet from "../assets/assets2/Image/tech/tablet.png";

import iphone from "../assets/assets2/Image/tech/iphone.png";


const ConsumerelectronicSection = () => {
  return (
    <div className="consumerelectronic-section ">  
      <div className="consumerelectronic-left">
        <div className="content">
                   <h2>Consumer Electronics & Gadgets</h2>
                   <button>Source Now</button>

        </div>
      </div>
      <div className="consumerelectronic-right">
        <div className="right1">
                  <CategoryGridCards title="Smart Watches" description="From USD $19" image={watch}/>
                  <CategoryGridCards title="Cameras" description="From USD $19" image={camera}/>
                  <CategoryGridCards title="Headphones" description="From USD $19" image={headphone2}/>
                  <CategoryGridCards title="Smart Watches" description="From USD $19" image={jug}/>
                  </div>
                  <div className="right2">
                  <CategoryGridCards title="Gaming set" description="From USD $100" image={headphone}/>
                  <CategoryGridCards title="Laptop & PC" description="From USD $100" image={laptop}/>
                  <CategoryGridCards title="Smartphones" description="From USD $100" image={tablet}/>
                  <CategoryGridCards title="Electronic kettle" description="From USD $100" image={iphone}/>
                  
                  </div>


        </div>
      </div>
    

  );
}      
  export default ConsumerelectronicSection;
