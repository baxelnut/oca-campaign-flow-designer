import React, { useState } from 'react';

export default function LeadingButton() {
  const [selectedOption, setSelectedOption] = useState('none');
  const [buttonCount, setButtonCount] = useState(1);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAddButton = () => {
    if (buttonCount < 2) {
      setButtonCount(buttonCount + 1);
    }
  };

  return (
    <div className="leading-button">
      <div className="title">
        <p>Button</p>
        <div className="title box">Optional</div>
      </div>
      <form className="dropdown" action="" method="get">
        <label htmlFor="button">
          {selectedOption === 'quick-replay'
            ? 'Create up to 2 buttons that let the customer respond to your message or take action.'
            : selectedOption === 'linking'
            ? 'Create a button that links to a URL.'
            : 'No buttons selected.'}
        </label>
        <select
          name="button"
          id="button"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="none">None</option>
          <option value="quick-replay">Quick Reply</option>
          <option value="linking">Linking</option>
        </select>
      </form>

      {selectedOption === 'quick-replay' && (
        <div className="quick-reply-container">
          {/* Button 1 */}
          <div className="button-item">
            <p>Button 1</p>
            <input type="text" placeholder="Enter button text" />
          </div>

          {/* Button 2 - only show if the button count is 2 */}
          {buttonCount === 2 && (
            <div className="button-item">
              <p>Button 2</p>
              <input type="text" placeholder="Enter button text" />
            </div>
          )}

          {/* Add Button */}
          {buttonCount < 2 && (
            <div className="button-placeholder">
              <div></div>
              <button
                type="button"
                className="add-button"
                onClick={handleAddButton}
              >
                + Add another button
              </button>
            </div>
          )}
        </div>
      )}

      {selectedOption === 'linking' && (
        <div className="linking-container">
          <div className="link-item">
            <label>Button Text</label>
            <input type="text" placeholder="Type here" />
          </div>
          <div className="link-item">
            <label>Website URL</label>
            <input type="text" placeholder="Type here" />
          </div>
        </div>
      )}
    </div>
  );
}
