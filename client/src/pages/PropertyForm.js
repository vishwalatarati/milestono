import React, { useState } from 'react';
import { Link } from "react-router-dom";
function HeroSection() {
    return (
      <div className="hero_section">
        <div className="hero_text" data-aos="fade-in" data-aos-duration="1000">
          <h1>Milestono.com</h1>
          <p>Sell or rent your property faster</p><p>Assistance in co-ordinating site visits*</p>
      
        </div>
  
        <div className="sections" data-aos="fade-in" data-aos-duration="1000">
         
  
          <div
            className="section_links"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            
            <Link className="sell">Sell</Link>
            <Link className="rent">Rent</Link>
            <Link className="pgs">PG</Link>
          </div>
        </div>
      </div>
    );
  }
function PropertyForm() {
  const [propertyType, setPropertyType] = useState([]);
  const [contactDetails, setContactDetails] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="container">
      <HeroSection/>
      <div class="property-type-selection">
  <div class="property-type-heading">
    What Kind Of property do you have?
  </div>
  <div class="property-categories">
    <div class="category residential">
      <div class="category-title">Residential</div>
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
    <input type="text" placeholder="Phone Number / Email / Username"/>
  </div>
  <button class="next-button">Next</button>
</div>

    </div>
  );
}

export default PropertyForm;
