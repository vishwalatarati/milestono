import React from 'react';

function PropertyForm1({ handleStepInc, formData, handleFormData }) {
  const sellType = ['Sell', 'Rent', 'PG'];

  const propertyContains = [
    'Flats/Apartment',
    'Independent House/Villa',
    'Independent/Builder Floor',
    'Plot/Land',
    '1RK/Studio Apartment',
    'Serviced Apartment',
    'Farmhouse',
    'Other'
  ];

  const handleOptionSelect = (option) => {
    if (!formData.propertyContains.includes(option)) {
      handleFormData("propertyContains",[...formData.propertyContains, option]);
    }
  };

  const handleOptionRemove = (optionToRemove) => {
    const updatedOptions = formData.propertyContains.filter((option) => option !== optionToRemove);
    handleFormData("propertyContains",updatedOptions);
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
      <div className="options">
        {sellType.map((option) => (
          <div
            key={option}
            className={`option width-30 ${formData.sellType === option ? 'selected' : ''}`}
            onClick={() => handleFormData("sellType",option)}
          >
            {option}
          </div>
        ))}
      </div>
      <hr />
      <div className="property-categories">
        <div className="category residential">
          <div className='category-type'>
            <div
              className={`category-title ${formData.propertyCategory === 'Residential' ? 'selectedcat' : ''}`}
              onClick={() => handleFormData("propertyCategory",'Residential')}
            >
              Residential
            </div>
            <div
              className={`category-title ${formData.propertyCategory === 'Commercial' ? 'selectedcat' : ''}`}
              onClick={() => handleFormData("propertyCategory",'Commercial')}
            >
              Commercial
            </div>
          </div>
          <hr />
          <br />
          <div className="options">
            {propertyContains.map((option) => (
              <div
                key={option}
                className={`option ${formData.propertyContains.includes(option) ? 'selected' : ''}`}
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
            {formData.propertyContains.map((option) => (
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
          value={formData.email}
          onChange={(e) => handleFormData("email",e.target.value)}
        />
      </div>
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
}

export default PropertyForm1;
