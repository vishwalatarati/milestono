import React, { useState } from 'react';

const StepThreeComponent = () => {
    const [uploadedPhotos, setUploadedPhotos] = useState([]);

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        // Filter and process the dropped files (e.g., validate file types, size)
        // For demonstration, we'll simply add them to the uploadedPhotos state
        setUploadedPhotos([...uploadedPhotos, ...files]);
    };

    const handleFileInputChange = (e) => {
        const files = Array.from(e.target.files);
        // Filter and process the selected files (e.g., validate file types, size)
        setUploadedPhotos([...uploadedPhotos, ...files]);
    };

    const handleAddPhotosClick = () => {
        // Trigger file input click programmatically
        const fileInput = document.getElementById('file-input');
        fileInput.click();
    };
    return (
        <div className="step-three-container">
            <h2>Add Photos & Other Details</h2>
            <div className="step-indicator">STEP 3 OF 3</div>
            <div className="section">
                <h3>Add Property Photos</h3>
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
                {/* Display uploaded photos */}
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

            {/* Other Rooms Section */}
            <div className="section">
                <h3>Other Rooms (Optional)</h3>
                <div class="options">
                    <div class="option">Pooja Room</div>
                    <div class="option selected">Servant Room</div>
                    <div class="option">Study Room</div>
                    <div class="option">Others</div>
                </div>
            </div>

            {/* Furnishing Section */}
            <div className="section">
                <h3>Furnishing (Optional)</h3>
                <div class="options">
                    <div class="option">Unfurnished</div>
                    <div class="option selected">Semi-Furnished</div>
                    <div class="option">Furnished</div>
                </div>
            </div>

            {/* Reserved Parking Section */}
            <div className="section">
                <h3>Reserved Parking (Optional)</h3>
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

            {/* Continue Button */}
            <div className="continue-button">
                <button>Continue</button>
            </div>
        </div>
    );
};

export default StepThreeComponent;
