import React, { useState } from 'react';

export default function TemplateButtons() {
  const [selectedButton, setSelectedButton] = useState('Dashboard');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="button-container">
      <div className="dropdown">
        <button
          type="button"
          className={selectedButton === 'Dashboard' ? 'selected' : ''}
          onClick={() => handleButtonClick('Dashboard')}
        >
          Dashboard
          <img src="src/assets/icons/arrow_down.svg" />
        </button>
        <button
          type="button"
          className={selectedButton === 'Term' ? 'selected' : ''}
          onClick={() => handleButtonClick('Term')}
        >
          Term
          <img src="src/assets/icons/arrow_down.svg" />
        </button>
      </div>
      <div className="action">
        <button className="draft" type="button">
          Draft
        </button>
        <button className="create" type="button">
          <img src="src/assets/icons/plus.svg" />
          Create Template
        </button>
      </div>
    </div>
  );
}
