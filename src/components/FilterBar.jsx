import React, { useState } from "react";
import "./FilterBar.css";

// collapsible price range panel used inside the main filter bar
const PriceRange = () => {
  const [open, setOpen] = useState(true);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(999999);
  const minRef = React.useRef(null);
  const maxRef = React.useRef(null);
  const rangeRef = React.useRef(null);

  const toggle = () => setOpen((o) => !o);

  // update the colored range element whenever sliders change
  React.useEffect(() => {
    if (minRef.current && maxRef.current && rangeRef.current) {
      const minPercent = (minVal / 999999) * 100;
      const maxPercent = (maxVal / 999999) * 100;
      rangeRef.current.style.left = `${minPercent}%`;
      rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal]);

  // keep numeric inputs in sync
  const onMinChange = (e) => {
    const val = Math.min(Number(e.target.value), maxVal);
    setMinVal(val);
  };
  const onMaxChange = (e) => {
    const val = Math.max(Number(e.target.value), minVal);
    setMaxVal(val);
  };

  return (
    <div className="price-range">
      <h3 className="collapsible" onClick={toggle}>
        Price Range <span className="caret">{open ? "▴" : "▾"}</span>
      </h3>
      {open && (
        <>
          {/* slider sits at top */}
          <div className="slider-container">
            <div className="slider-track"></div>
            <div className="slider-range" ref={rangeRef}></div>
            <input
              type="range"
              min="0"
              max="999999"
              value={minVal}
              ref={minRef}
              onChange={(e) => setMinVal(Number(e.target.value))}
            />
            <input
              type="range"
              min="0"
              max="999999"
              value={maxVal}
              ref={maxRef}
              onChange={(e) => setMaxVal(Number(e.target.value))}
            />
          </div>

          {/* numeric inputs with labels */}
          <div className="inputs">
            <div className="input-group">
              <label htmlFor="min-price">Min</label>
              <input
                type="number"
                id="min-price"
                value={minVal}
                min="0"
                max="999999"
                onChange={onMinChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="max-price">Max</label>
              <input
                type="number"
                id="max-price"
                value={maxVal}
                min="0"
                max="999999"
                onChange={onMaxChange}
              />
            </div>
          </div>

          <button type="button" className="apply-btn">
            Apply
          </button>
        </>
      )}
    </div>
  );
};

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="filter-option">
        <h3>Category</h3>
        {/* each category is rendered as a paragraph for consistency with other filter
            entries and easier styling */}
        {[
          "Mobile Accessories",
          "Electronics",
          "Smart Phones",
          "Modern Tech",
          "See All",
        ].map((cat) => (
          <p key={cat} className="filter-text">
            {cat}
          </p>
        ))}
      </div>
      <div className="filter-option">
        <h3>Brand</h3>
        <label htmlFor="samsung">Samsung         <input type="checkbox" name="samsung" id="samsung"  /></label>
        <label htmlFor="apple">Apple         <input type="checkbox" name="apple" id="apple"  />         </label>
        <label htmlFor="huawei">Huawei         <input type="checkbox" name="huawei" id="huawei"/>        </label>
        <label htmlFor="pocco">Pocco              <input type="checkbox" name="pocco" id="pocco"/>       </label>
        <label htmlFor="lenovo">Lenovo          <input type="checkbox" name="lenovo" id="lenovo"/>       </label>
      </div>
      <div className="filter-option">
        <h3>Features</h3>
        <label htmlFor="mettalic">Mettalic          <input type="checkbox" name="Mettalic" id="mettalic"  /> </label>
        <label htmlFor="plastic-cover">Plastic Cover          <input type="checkbox" name="Plastic Cover" id="plastic-cover"  />  </label>
        <label htmlFor="8gb-ram">8GB RAM         <input type="checkbox" name="8GB RAM" id="8gb-ram"/>  </label>
        <label htmlFor="super-power">Super Power          <input type="checkbox" name="Super Power" id="super-power"/>  </label>
        <label htmlFor="large-memory">Large Memory         <input type="checkbox" name="Large Memory" id="large-memory"/> </label>
      </div>
      {/* price range with collapsible content */}
      <PriceRange />

      <div className="filter-option">
        <h3>Conditions</h3>
        <label htmlFor="any">Any         <input type="radio" name="condition" id="any" /></label>
        <label htmlFor="refurbished">Refurbished          <input type="radio" name="condition" id="refurbished" /> </label>
        <label htmlFor="new">Brand New        <input type="radio" name="condition" id="new" />  </label>
        <label htmlFor="olditem">Old Item         <input type="radio" name="condition" id="olditem" /></label>
      </div>
      <div className="filter-option rating-filter">
        <h3>Rating</h3>
        <label htmlFor="rating-5">★★★★★           <input type="radio" name="rating" id="rating-5" />  </label>
        <label htmlFor="rating-4">★★★★☆         <input type="radio" name="rating" id="rating-4" />  </label>
        <label htmlFor="rating-3">★★★☆☆         <input type="radio" name="rating" id="rating-3" />  </label>
        <label htmlFor="rating-2">★★☆☆☆         <input type="radio" name="rating" id="rating-2" />  </label>
        <label htmlFor="rating-1">★☆☆☆☆         <input type="radio" name="rating" id="rating-1" />  </label>
      </div>

      <div className="filter-option">
        <h3>Manufacturer</h3>
        <label htmlFor="manu-samsung">Samsung          <input type="checkbox" name="manufacturer" id="manu-samsung"/>  </label>
        <label htmlFor="manu-apple">Apple            <input type="checkbox" name="manufacturer" id="manu-apple"/>  </label>
        <label htmlFor="manu-nokia">Nokia            <input type="checkbox" name="manufacturer" id="manu-nokia"/>  </label>
        <label htmlFor="manu-lg">LG               <input type="checkbox" name="manufacturer" id="manu-lg"/>  </label>
      </div>

    </div>
  );
};

export default FilterBar;
