import React, { useState } from 'react';

const PropertyForm3 = (prop) => {
    const [uploadedPhotos, setUploadedPhotos] = useState([]);
    const furnishingOptions = ['Unfurnished', 'Semi-Furnished', 'Furnished'];
    const [selectedFurnishing, setSelectedFurnishing] = useState('Semi-Furnished');
    const roomOptions = ['Pooja Room', 'Servant Room', 'Study Room', 'Others'];
    const [selectedRoom, setSelectedRoom] = useState('Servant Room');

    const handleRoomSelect = (option) => {
        setSelectedRoom(option);
    };

    const handleFurnishingChange = (option) => {
        setSelectedFurnishing(option);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        setUploadedPhotos([...uploadedPhotos, ...files]);
    };

    const handleFileInputChange = (e) => {
        const files = Array.from(e.target.files);
        setUploadedPhotos([...uploadedPhotos, ...files]);
    };

    const handleAddPhotosClick = () => {
        const fileInput = document.getElementById('file-input');
        fileInput.click();
    };
    return (
        <div className="property-form">
            <div>
                Step 3 of 3
            </div>
            <h2 className='property-form-heading'>Add Photos & Other Details</h2>
            <div className="add-photo-section">
                <h3 className='property-form-heading2'>Add Property Photos</h3>
                <div
                    className="add-photos drop-zone"
                    onClick={handleAddPhotosClick}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <button>+ Add Photos</button>
                    <p>Click or drag and drop photos here</p>
                    <input
                        id="file-input"
                        type="file"
                        accept=".png, .jpg, .jpeg, .gif, .webp, .heic, .heif"
                        multiple
                        onChange={handleFileInputChange}
                        style={{ display: 'none' }}
                    />
                </div>
                {uploadedPhotos.length > 0 && (
                    <div className="uploaded-photos">
                        <h4>Uploaded Photos:</h4>
                        <ul>
                            {uploadedPhotos.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <p>I will send photos over WhatsApp with your registered number 9122xxxxxx</p>
            </div>
            <div className="add-photo-section">
                <h3 className='property-form-heading2'>Other Rooms (Optional)</h3>
                <div className="options">
                    {roomOptions.map((option) => (
                        <div
                            key={option}
                            className={`option ${selectedRoom === option ? 'selected' : ''}`}
                            onClick={() => handleRoomSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </div>
            <div className="add-photo-section">
                <h3 className='property-form-heading2'>Furnishing (Optional)</h3>
                <div className="options">
                    {furnishingOptions.map((option) => (
                        <div
                            key={option}
                            className={`option ${selectedFurnishing === option ? 'selected' : ''}`}
                            onClick={() => handleFurnishingChange(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </div>
            <div className="add-photo-section">
                <h3 className='property-form-heading2'>Reserved Parking (Optional)</h3>
                <div className="parking-list">
                    <label>
                        <input type="radio" name="parking" value="Covered Parking" />
                        Covered Parking
                    </label>
                    <label>
                        <input type="radio" name="parking" value="Open Parking" />
                        Open Parking
                    </label>
                </div>
            </div>
            <div className="continue-button">
                <button>Continue</button>
            </div>
        </div>
    );
};

export default PropertyForm3;
