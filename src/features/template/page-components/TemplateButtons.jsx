import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TemplateButtons() {
  const [selectedButton, setSelectedButton] = useState('Dashboard');
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleCreateTemplateClick = () => {
    navigate('/create-template'); 
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
        <button className="create" type="button" onClick={handleCreateTemplateClick} >
          <img src="src/assets/icons/plus.svg" />
          Create Template
        </button>
      </div>
    </div>
  );
}
