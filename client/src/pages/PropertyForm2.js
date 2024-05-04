import React, { useState } from 'react';

const Step2Form = () => {
    const [city, setCity] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [balconies, setBalconies] = useState('');
    const [ownership, setOwnership] = useState('');
    const [expectedPrice, setExpectedPrice] = useState('');
    const [priceInWords, setPriceInWords] = useState('');
    const [pricePerSqFt, setPricePerSqFt] = useState('');
    const [isAllInclusive, setIsAllInclusive] = useState(false);
    const [isPriceNegotiable, setIsPriceNegotiable] = useState(false);
    const [uniqueFeatures, setUniqueFeatures] = useState('');

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

    const handleOwnershipChange = (e) => {
        setOwnership(e.target.value);
    };

    const handleExpectedPriceChange = (e) => {
        setExpectedPrice(e.target.value);
    };

    const handlePriceInWordsChange = (e) => {
        setPriceInWords(e.target.value);
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

    const handleUniqueFeaturesChange = (e) => {
        setUniqueFeatures(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can use the state variables to send data to backend or perform further actions
    };

    return (
        <div className="step2-container">
            <h2>Basic Details of your property</h2>
            <p>STEP 2 OF 3</p>

            <div className="property-info-section">
                <h3>Where is your property located?</h3>
                <label>
                    City:
                    <input type="text" value={city} onChange={handleCityChange} />
                </label>
                <button>Detect my current location</button>
            </div>

            <div className="room-details-section">
                <h3>Add Room Details</h3>
                No.of Bedrooms
                <div class="circle-options">
                    <label>
                        <input type="radio" name="bedrooms" value="1" onChange={handleBedroomsChange} />
                        1
                    </label>
                    <label>
                        <input type="radio" name="bedrooms" value="2" onChange={handleBedroomsChange} />
                        2
                    </label>
                    <label>
                        <input type="radio" name="bedrooms" value="3" onChange={handleBedroomsChange} />
                        3
                    </label>
                    <label>
                        <input type="radio" name="bedrooms" value="4" onChange={handleBedroomsChange} />
                        4
                    </label>
                    <label>
                        <input type="radio" name="bedrooms" value="5+" onChange={handleBedroomsChange} />
                        5+
                    </label>
                </div>

                <label>
                    No. of Bathrooms:
                    <div class="circle-options">
                        <label>
                            <input type="radio" name="bedrooms" value="1" onChange={handleBedroomsChange} />
                            1
                        </label>
                        <label>
                            <input type="radio" name="bedrooms" value="2" onChange={handleBedroomsChange} />
                            2
                        </label>
                        <label>
                            <input type="radio" name="bedrooms" value="3" onChange={handleBedroomsChange} />
                            3
                        </label>
                        <label>
                            <input type="radio" name="bedrooms" value="4" onChange={handleBedroomsChange} />
                            4
                        </label>
                        <label>
                            <input type="radio" name="bedrooms" value="5+" onChange={handleBedroomsChange} />
                            5+
                        </label>
                    </div>
                </label>
                <label>
                    No. of Balconies:
                    <div class="circle-options">
                        <label>
                            <input type="radio" name="bedrooms" value="1" onChange={handleBedroomsChange} />
                            1
                        </label>
                        <label>
                            <input type="radio" name="bedrooms" value="2" onChange={handleBedroomsChange} />
                            2
                        </label>
                        <label>
                            <input type="radio" name="bedrooms" value="3" onChange={handleBedroomsChange} />
                            3
                        </label>
                        <label>
                            <input type="radio" name="bedrooms" value="4" onChange={handleBedroomsChange} />
                            4+
                        </label>
                    </div>
                </label>
            </div>

            <div className="basic-details-section">
                <h3>Basic Details</h3>
                <div>
                    Ownership:
                    <div class="options">
                        <div class="option">Freehold</div>
                        <div class="option selected">Co-operative society</div>
                        <div class="option">Leasehold</div>
                        <div class="option">Power of Attorney</div>
                    </div>
                </div>
            </div>

            <div className="price-details-section">
                <h3>Price Details</h3>
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
                        checked={isPriceNegotiable}
                        onChange={handlePriceNegotiableChange}
                    />
                    Tax and Govt.charges excluded
                </label>
            </div>

            <div className="unique-features-section">
                <h3>What makes your property unique</h3>
                <p>Adding description will increase your listing visibility</p>
                <textarea
                    value={uniqueFeatures}
                    onChange={handleUniqueFeaturesChange}
                    rows={4}
                    cols={50}
                    placeholder='Share some details about your property like specious rooms,well maintaines facilities.'
                />
            </div>

            <button class="next-button" onClick={handleSubmit}>Next</button>
        </div>
    );
};

export default Step2Form;
