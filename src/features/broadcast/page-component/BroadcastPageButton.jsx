import React, { useState } from 'react';
import '../BroadcastPage.css';
// import { useNavigate } from 'react-router-dom';

export default function BroadcastPageButton() {
  const [selectedButton, setSelectedButton] = useState('Dashboard');
  //   const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  //   const handleCreateTemplateClick = () => {
  //     navigate('/template/create');
  //   };

  return (
    <>
      {/* css from template.css */}
      <div className="button-container">
        <div className="dropdown">
          <button
            type="button"
            className={selectedButton === 'Dashboard' ? 'selected' : ''}
            onClick={() => handleButtonClick('Dashboard')}
          >
            Dashboard
            <img src="/icons/arrow_down.svg" alt="Arrow Down" />
          </button>
          <button
            type="button"
            className={selectedButton === 'About' ? 'selected' : ''}
            onClick={() => handleButtonClick('About')}
          >
            About
            <img src="/icons/arrow_down.svg" alt="Arrow Down" />
          </button>
          <button
            type="button"
            className={selectedButton === 'Term' ? 'selected' : ''}
            onClick={() => handleButtonClick('Term')}
          >
            Term
            <img src="/icons/arrow_down.svg" alt="Arrow Down" />
          </button>
        </div>
      </div>
      <div className="bottom-button-container">
        <button className="draft" type="button">
          Draft
        </button>
        <div style={{ flex: 'auto' }}></div>
        <button className="failed" type="button">
          Failed Message
        </button>

        <button className="create" type="button">
          <img src="src\assets\icons\plus.svg" />
          CREATE BROADCAST
        </button>
      </div>
    </>
  );
}
