import React from 'react';

export default function LeadingVariables() {
  return (
    <div className="variables">
      <div className="title">
        <p>Add Variables</p>
      </div>
      <div className="button-grid">
        <button className="variable-btn">
          <span className="plus-sign">+</span> Email
        </button>
        <button className="variable-btn">
          <span className="plus-sign">+</span> Phone number
        </button>
        <button className="variable-btn">
          <span className="plus-sign">+</span> Record speech
        </button>
        <button className="variable-btn">
          <span className="plus-sign">+</span> Address
        </button>
        <button className="variable-btn">
          <span className="plus-sign">+</span> Video
        </button>
        <button className="variable-btn">
          <span className="plus-sign">+</span> More
        </button>
      </div>
    </div>
  );
}
