import React from 'react';

export default function TemplateButtons() {
  return (
    <div className="button-container">
      <div className="dropdown">
        <button type="button">
          Dashboard
          <img src="src\assets\icons\arrow_down.svg" />
        </button>
        <button type="button">
          Term
          <img src="src\assets\icons\arrow_down.svg" />
        </button>
      </div>
      <div className="action">
        <button className="draft" type="button">
          Draft
        </button>
        <button className="create" type="button">
            <img src="src\assets\icons\plus.svg"/>
         Create Template
        </button>
      </div>
    </div>
  );
}
