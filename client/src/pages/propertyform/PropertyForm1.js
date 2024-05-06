import React, { useState } from 'react';

function PropertyForm1({ handleStepInc }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const propertyOptions = [
    'Flats/Apartment',
    'Independent House/Villa',
    'Independent/Builder Floor',
    'Plot/Land',
    '1RK/Studio Apartment',
    'Serviced Apartment',
    'Farmhouse',
    'Other'
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleOptionSelect = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleOptionRemove = (optionToRemove) => {
    const updatedOptions = selectedOptions.filter((option) => option !== optionToRemove);
    setSelectedOptions(updatedOptions);
  };

  const handleNext = () => {
    handleStepInc();
  };

  return (
    <div className="property-form">
      <div>
        Step 1 of 3
      </div>
      <div className="property-form-heading">
        What Kind Of property do you have?
      </div>
      <hr />
      <div className="property-categories">
        <div className="category residential">
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
          <div className="options">
            {propertyOptions.map((option) => (
              <div
                key={option}
                className={`option ${selectedOptions.includes(option) ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div class="category commercial">
            <div class="category-title">Your Selected</div>
          </div>
          <div className="selected-options">
            {selectedOptions.map((option) => (
              <div key={option} className="selected-option">
                {option} <span className="remove-option" onClick={() => handleOptionRemove(option)}>×</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contact-details">
        Your contact details for the buyer to reach you
        <input
          type="text"
          placeholder="Phone Number / Email / Username"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
}

export default PropertyForm1;
