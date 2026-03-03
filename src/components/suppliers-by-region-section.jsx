import React from "react";
import RegionCard from "./card-components/region-card";
import  "./suppliers-by-region-section.css";
const SuppliersByRegionSection = () => {
  return (
    <div className="suppliers-by-region-section">
      <h2>Suppliers By Region</h2>
        <div className="region">
          <div className="row1">
            <RegionCard
                image="https://flagcdn.com/w320/eg.png"
                title="Egypt"
            />
             <RegionCard
                image="https://flagcdn.com/w320/ae.png"
                title="UAE"
            />
             <RegionCard
                image="https://flagcdn.com/w320/qa.png"
                title="Qatar"
            />
              <RegionCard 
                image="https://flagcdn.com/w320/sa.png"
                title="Saudi Arabia"
            />
              <RegionCard 
                image="https://flagcdn.com/w320/ma.png"
                title="Morocco"
            />
           
          </div>
           
    </div>
    <div className="row2">
              <RegionCard   
                image="https://flagcdn.com/w320/om.png"
                title="Oman"
            />
             <RegionCard
                image="https://flagcdn.com/w320/kw.png"
                title="Kuwait"
            />
             <RegionCard
                image="https://flagcdn.com/w320/bh.png"
                title="Bahrain"
            />  
            <RegionCard
                image="https://flagcdn.com/w320/ly.png"
                title="Libya"
            />
              <RegionCard
                image="https://flagcdn.com/w320/tn.png"
                title="Tunisia"
            />
    </div>
    </div>
  );
}
export default SuppliersByRegionSection;