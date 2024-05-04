import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PropertyForm2 from "./PropertyForm2.js";
function PropertyForm() {
  const [propertyType, setPropertyType] = useState([]);
  const [contactDetails, setContactDetails] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // State to track selected category

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handlePropertyTypeChange = (type) => {
    if (propertyType.includes(type)) {
      setPropertyType(propertyType.filter(item => item !== type));
    } else {
      setPropertyType([...propertyType, type]);
    }
  }

  const handleContactDetailsChange = (event) => {
    setContactDetails(event.target.value);
  }

  const handleNext = (event) => {
    return <PropertyForm2></PropertyForm2>;
  }

  return (
    <div className="container">

      <div class="property-type-selection">
        <div>
          Step 1 of 3
        </div>
        <div class="property-type-heading">
          What Kind Of property do you have?
        </div>

        <hr />
        <div class="property-categories">
          <div class="category residential">
            <div className='category-type'>
              <div
                className={`category-title ${selectedCategory === 'Residential' ? 'selectedcat' : ''}`}
                onClick={() => handleCategorySelect('Residential')}
              >
                Residential
              </div>
              <div
                className={`category-title ${selectedCategory === 'Commercial' ? 'selectedcat' : ''}`}
                onClick={() => handleCategorySelect('Commercial')}
              >
                Commercial
              </div>
            </div>
            <hr />
            <br />
            <div class="options">
              <div class="option">Flats/Apartment</div>
              <div class="option selected">Independent House/Villa</div>
              <div class="option">Independent/Builder Floor</div>
              <div class="option">Plot/Land</div>
              <div class="option">1RK/Studio Apartment</div>
              <div class="option">Serviced Apartment</div>
              <div class="option">Farmhouse</div>
              <div class="option">Other</div>
            </div>
          </div>
          <div class="category commercial">
            <div class="category-title">Your Selected</div>
          </div>
        </div>
        <div class="selected-options">
          <div class="selected-option">Flats/Apartment <span class="remove-option">×</span></div>
          <div class="selected-option">Independent House/Villa <span class="remove-option">×</span></div>
        </div>
        <div class="contact-details">
          Your contact details for the buyer to reach you
          <input type="text" placeholder="Phone Number / Email / Username" />
        </div>
        <button class="next-button" onClick={handleNext}>Next</button>
      </div>

    </div>
  );
}

export default PropertyForm;
