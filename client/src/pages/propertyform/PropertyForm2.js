import React from 'react';

const PropertyForm2 = ({handleStepInc, formData, handleFormData}) => {
    const ownershipOptions = ['Freehold', 'Co-operative society', 'Leasehold', 'Power of Attorney'];

    const handleSubmit = (e) => {
        e.preventDefault();
        handleStepInc();
    };

    return (
        <div className="property-form">
            <div>
                Step 2 of 3
            </div>
            <h2 className='property-form-heading'>Basic Details of your property</h2>

            <div className="property-info-section">
                <h3 className='property-form-heading2'>Where is your property located?</h3>
                <label>
                    City:
                    <input type="text" value={formData.city} onChange={(e)=>{handleFormData("city",e.target.value)}} />
                </label>
                <button>Detect my current location</button>
            </div>

            <div className="room-details-section">
                <h3 className='property-form-heading2'>Add Room Details</h3>
                No.of Bedrooms
                <div className="circle-options">
                    <label className={formData.bedrooms === '1' ? "selected" : ""}>
                        <input type="radio" name="bedrooms" value="1" onChange={(e)=>{handleFormData("bedrooms",e.target.value)}} />
                        1
                    </label>
                    <label className={formData.bedrooms === '2' ? "selected" : ""}>
                        <input type="radio" name="bedrooms" value="2" onChange={(e)=>{handleFormData("bedrooms",e.target.value)}} />
                        2
                    </label>
                    <label className={formData.bedrooms === '3' ? "selected" : ""}>
                        <input type="radio" name="bedrooms" value="3" onChange={(e)=>{handleFormData("bedrooms",e.target.value)}} />
                        3
                    </label>
                    <label className={formData.bedrooms === '4' ? "selected" : ""}>
                        <input type="radio" name="bedrooms" value="4" onChange={(e)=>{handleFormData("bedrooms",e.target.value)}} />
                        4
                    </label>
                    <label className={formData.bedrooms === '5+' ? "selected" : ""}>
                        <input type="radio" name="bedrooms" value="5+" onChange={(e)=>{handleFormData("bedrooms",e.target.value)}} />
                        5+
                    </label>
                </div>

                <label>
                    No. of Bathrooms:
                    <div className="circle-options">
                        <label className={formData.bathrooms === '1' ? "selected" : ""}>
                            <input type="radio" name="bathrooms" value="1" onChange={(e)=>{handleFormData("bathrooms",e.target.value)}} />
                            1
                        </label>
                        <label className={formData.bathrooms === '2' ? "selected" : ""}>
                            <input type="radio" name="bathrooms" value="2" onChange={(e)=>{handleFormData("bathrooms",e.target.value)}} />
                            2
                        </label>
                        <label className={formData.bathrooms === '3' ? "selected" : ""}>
                            <input type="radio" name="bathrooms" value="3" onChange={(e)=>{handleFormData("bathrooms",e.target.value)}} />
                            3
                        </label>
                        <label className={formData.bathrooms === '4' ? "selected" : ""}>
                            <input type="radio" name="bathrooms" value="4" onChange={(e)=>{handleFormData("bathrooms",e.target.value)}} />
                            4
                        </label>
                        <label className={formData.bathrooms === '5+' ? "selected" : ""}>
                            <input type="radio" name="bathrooms" value="5+" onChange={(e)=>{handleFormData("bathrooms",e.target.value)}} />
                            5+
                        </label>
                    </div>
                </label>
                <label>
                    No. of Balconies:
                    <div className="circle-options">
                        <label className={formData.balconies === '1' ? "selected" : ""}>
                            <input type="radio" name="balconies" value="1" onChange={(e)=>{handleFormData("balconies",e.target.value)}} />
                            1
                        </label>
                        <label className={formData.balconies === '2' ? "selected" : ""}>
                            <input type="radio" name="balconies" value="2" onChange={(e)=>{handleFormData("balconies",e.target.value)}} />
                            2
                        </label>
                        <label className={formData.balconies === '3' ? "selected" : ""}>
                            <input type="radio" name="balconies" value="3" onChange={(e)=>{handleFormData("balconies",e.target.value)}} />
                            3
                        </label>
                        <label className={formData.balconies === '4+' ? "selected" : ""}>
                            <input type="radio" name="balconies" value="4+" onChange={(e)=>{handleFormData("balconies",e.target.value)}} />
                            4+
                        </label>
                    </div>
                </label>
            </div>

            <div className="basic-details-section">
                <h3 className='property-form-heading2'>Basic Details</h3>
                <div>
                    Ownership:
                    <div className="options">
                        {ownershipOptions.map((option) => (
                            <div
                                key={option}
                                className={`option ${formData.ownership === option ? 'selected' : ''}`}
                                onClick={() => handleFormData("ownership",option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="price-details-section">
                <h3 className='property-form-heading2'>Price Details</h3>
                <label>
                    Expected Price:
                    <input type="text" value={formData.expectedPrice} onChange={(e)=>{handleFormData("expectedPrice",e.target.value)}} placeholder='₹ Expected Price' />
                </label>
                <label>
                    Price per sq.ft.:
                    <input type="text" value={formData.pricePerSqFt} onChange={(e)=>{handleFormData("pricePerSqFt",e.target.value)}} placeholder='₹ Price per sq.ft.' />
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={formData.isAllInclusive}
                        onChange={(e)=>{handleFormData("isAllInclusive",e.target.checked)}}
                    />
                    All inclusive price?
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={formData.isPriceNegotiable}
                        onChange={(e)=>{handleFormData("isPriceNegotiable",e.target.checked)}}
                    />
                    Price Negotiable
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={formData.isTaxchargeExc}
                        onChange={(e)=>{handleFormData("isTaxchargeExc",e.target.checked)}}
                    />
                    Tax and Govt.charges excluded
                </label>
            </div>

            <div className="unique-features-section">
                <h3 className='property-form-heading2'>What makes your property unique</h3>
                <p>Adding description will increase your listing visibility</p>
                <textarea
                    value={formData.uniqueFeatures}
                    onChange={(e)=>{handleFormData("uniqueFeatures",e.target.value)}}
                    rows={4}
                    cols={50}
                    placeholder='Share some details about your property like specious rooms,well maintaines facilities.'
                />
            </div>

            <button className="next-button" onClick={handleSubmit}>Next</button>

        </div>
    );
};

export default PropertyForm2;
