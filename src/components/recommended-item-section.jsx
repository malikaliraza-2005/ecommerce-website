import React from "react";
import "./recommended-item-section.css";
import ProductCard from "./card-components/product-cards";
import JacketPic from "../assets/assets2/Layout/alibaba/Image/cloth/jacket.png";
import ShirtPic from "../assets/assets2/Layout/alibaba/Image/cloth/shirt.png";
import CoatPic from "../assets/assets2/Layout/alibaba/Image/cloth/coat.png";
import WalletPic from "../assets/assets2/Layout/alibaba/Image/cloth/wallet.png";
import BagPic from "../assets/assets2/Layout/alibaba/Image/cloth/bag.png";
import ShortPic from "../assets/assets2/Layout/alibaba/Image/cloth/short.png";
import Headphone from "../assets/assets2/Image/tech/headphone2.png";
import Pot from "../assets/assets2/Image/interior/pot.png";
import JarPic from "../assets/assets2/Image/tech/jug.png";


const RecommendedItemSection = () => {
  return (      
    <div className="recommended-item-section">
      <div className="one">
        <ProductCard  className="recommended-card"   title="10.30$" description="T-shirts with multiple colors, for men." image={ShirtPic} />
        <ProductCard  className="recommended-card"  title="10.30$" description="JBrown winter coat, medium size." image={JacketPic} />
        <ProductCard  className="recommended-card"  title="10.30$" description="Coats with multiple colors, for men." image={CoatPic} />
        <ProductCard  className="recommended-card"  title="10.30$" description="Leather wallet." image={WalletPic} />
        <ProductCard  className="recommended-card"  title="10.30$" description="Bags with multiple colors, for men." image={BagPic} />

      </div>
          
      <div className="second">
        <ProductCard  className="recommended-card"  title="10.30$" description="Jeans shorts for men, blue color." image={ShortPic} />
        <ProductCard  className="recommended-card"  title="10.30$" description="Headset for gaming with mic" image={Headphone} />
        <ProductCard  className="recommended-card"  title="10.30$" description="Jeans bag for travel for men." image={BagPic} />
        <ProductCard  className="recommended-card"  title="10.30$" description="Pots with multiple colors, for men." image={Pot} />
         <ProductCard  className="recommended-card"  title="10.30$" description="Jugs with multiple colors, for men." image={JarPic} />

      </div>
    </div>
  );
}
export default RecommendedItemSection;