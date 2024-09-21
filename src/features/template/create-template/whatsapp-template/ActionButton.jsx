import React, { useState } from 'react';

export default function ActionButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmitClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSaveClick = () => {
    setShowPopup(false);
    setShowSuccessPopup(true);

    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 3000);
  };

  return (
    <div className="action-button">
      <div className="button draft">
        <p>Save as draft</p>
      </div>
      <div className="button submit" onClick={handleSubmitClick}>
        <p>SUBMIT TEMPLATE</p>
      </div>

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Are you sure to save this template?</h2>
            <p>Make sure the broadcast attributes are correct.</p>
            <p>
              The message does not contain inappropriate or unlawful words in
              Indonesia.
            </p>
            <p>
              For more info, please read the Terms and Conditions of WhatsApp
              broadcast.
            </p>
            <div className="popup-buttons">
              <button className="not-sure-button" onClick={handleClosePopup}>
                I'm not sure
              </button>
              <button className="save-button" onClick={handleSaveClick}>
                SAVE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img src="/icons/complete.svg" alt="Success" />
            <h2>Template Created!</h2>
            <p>Now it's on the template list</p>
          </div>
        </div>
      )}
    </div>
  );
}
