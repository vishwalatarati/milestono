import React, { useState } from 'react';

const PropertyForm2 = (prop) => {
    const [city, setCity] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [balconies, setBalconies] = useState('');
    const [expectedPrice, setExpectedPrice] = useState('');
    const [pricePerSqFt, setPricePerSqFt] = useState('');
    const [isAllInclusive, setIsAllInclusive] = useState(false);
    const [isPriceNegotiable, setIsPriceNegotiable] = useState(false);
    const [isTaxchargeExc,setIsTaxchargeExc] = useState(false);
    const [uniqueFeatures, setUniqueFeatures] = useState('');
    const ownershipOptions = ['Freehold', 'Co-operative society', 'Leasehold', 'Power of Attorney'];
    const [selectedOwnership, setSelectedOwnership] = useState('Co-operative society');



    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleBedroomsChange = (e) => {
        setBedrooms(e.target.value);
    };

    const handleBathroomsChange = (e) => {
        setBathrooms(e.target.value);
    };

    const handleBalconiesChange = (e) => {
        setBalconies(e.target.value);
    };

    const handleOwnershipChange = (option) => {
        setSelectedOwnership(option);
    };

    const handleExpectedPriceChange = (e) => {
        setExpectedPrice(e.target.value);
    };


    const handlePricePerSqFtChange = (e) => {
        setPricePerSqFt(e.target.value);
    };

    const handleAllInclusiveChange = (e) => {
        setIsAllInclusive(e.target.checked);
    };

    const handlePriceNegotiableChange = (e) => {
        setIsPriceNegotiable(e.target.checked);
    };

    const handleTaxchargeExcChange = (e) => {
        setIsTaxchargeExc(e.target.checked);
    };

    const handleUniqueFeaturesChange = (e) => {
        setUniqueFeatures(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        prop.handleStepInc();
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
                    <input type="text" value={city} onChange={handleCityChange} />
                </label>
                <button>Detect my current location</button>
            </div>

            <div className="room-details-section">
                <h3 className='property-form-heading2'>Add Room Details</h3>
                No.of Bedrooms
                <div className="circle-options">
                    <label className={bedrooms === '1' ? "selected" : ""}>
                        <input type="radio" name="bedrooms" value="1" onChange={handleBedroomsChange} />
                        1
                    </label>
                    <label className={bedrooms === '2' ? "selected" : ""}>
                        <input type="radio" name="bedrooms" value="2" onChange={handleBedroomsChange} />
                        2
                    </label>
                    <label className={bedrooms === '3' ? "selected" : ""}>
                        <input type="radio" name="bedrooms" value="3" onChange={handleBedroomsChange} />
                        3
                    </label>
                    <label className={bedrooms === '4' ? "selected" : ""}>
                        <input type="radio" name="bedrooms" value="4" onChange={handleBedroomsChange} />
                        4
                    </label>
                    <label className={bedrooms === '5+' ? "selected" : ""}>
                        <input type="radio" name="bedrooms" value="5+" onChange={handleBedroomsChange} />
                        5+
                    </label>
                </div>

                <label>
                    No. of Bathrooms:
                    <div className="circle-options">
                        <label className={bathrooms === '1' ? "selected" : ""}>
                            <input type="radio" name="bathrooms" value="1" onChange={handleBathroomsChange} />
                            1
                        </label>
                        <label className={bathrooms === '2' ? "selected" : ""}>
                            <input type="radio" name="bathrooms" value="2" onChange={handleBathroomsChange} />
                            2
                        </label>
                        <label className={bathrooms === '3' ? "selected" : ""}>
                            <input type="radio" name="bathrooms" value="3" onChange={handleBathroomsChange} />
                            3
                        </label>
                        <label className={bathrooms === '4' ? "selected" : ""}>
                            <input type="radio" name="bathrooms" value="4" onChange={handleBathroomsChange} />
                            4
                        </label>
                        <label className={bathrooms === '5+' ? "selected" : ""}>
                            <input type="radio" name="bathrooms" value="5+" onChange={handleBathroomsChange} />
                            5+
                        </label>
                    </div>
                </label>
                <label>
                    No. of Balconies:
                    <div className="circle-options">
                        <label className={balconies === '1' ? "selected" : ""}>
                            <input type="radio" name="balconies" value="1" onChange={handleBalconiesChange} />
                            1
                        </label>
                        <label className={balconies === '2' ? "selected" : ""}>
                            <input type="radio" name="balconies" value="2" onChange={handleBalconiesChange} />
                            2
                        </label>
                        <label className={balconies === '3' ? "selected" : ""}>
                            <input type="radio" name="balconies" value="3" onChange={handleBalconiesChange} />
                            3
                        </label>
                        <label className={balconies === '4+' ? "selected" : ""}>
                            <input type="radio" name="balconies" value="4+" onChange={handleBalconiesChange} />
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
                                className={`option ${selectedOwnership === option ? 'selected' : ''}`}
                                onClick={() => handleOwnershipChange(option)}
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
                    <input type="text" value={expectedPrice} onChange={handleExpectedPriceChange} placeholder='₹ Expected Price' />
                </label>
                <label>
                    Price per sq.ft.:
                    <input type="text" value={pricePerSqFt} onChange={handlePricePerSqFtChange} placeholder='₹ Price per sq.ft.' />
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={isAllInclusive}
                        onChange={handleAllInclusiveChange}
                    />
                    All inclusive price?
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={isPriceNegotiable}
                        onChange={handlePriceNegotiableChange}
                    />
                    Price Negotiable
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={isTaxchargeExc}
                        onChange={handleTaxchargeExcChange}
                    />
                    Tax and Govt.charges excluded
                </label>
            </div>

            <div className="unique-features-section">
                <h3 className='property-form-heading2'>What makes your property unique</h3>
                <p>Adding description will increase your listing visibility</p>
                <textarea
                    value={uniqueFeatures}
                    onChange={handleUniqueFeaturesChange}
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
