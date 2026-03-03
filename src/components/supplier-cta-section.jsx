import React from "react";
import "./supplier-cta-section.css";

const SupplierCtaSection = () => {
  return (
    <div className="supplier-cta-section">
      <div className="supplier-left">
       <h1>An easy way to send request to all suppliers</h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, rerum.</p>
      </div>
      <div className="supplier-right">
         <h2>Send quote to suppliers</h2>
        <input type="text" placeholder="What are you looking for?"  readOnly/>
        <textarea name="details" id="details" placeholder="Enter more details about your requirements"></textarea>
        <input type="number" placeholder="Quantity" readOnly />
        <select name="quantity" id="quantity" defaultValue="" placeholder="Pcs">
          <option value="">Pcs</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
};

export default SupplierCtaSection;