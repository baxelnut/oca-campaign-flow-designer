import React from 'react';

export default function ContactButtons() {
  return (
    <div className="button-container">
      <button className="button refresh">
        <img src="src/assets/icons/refresh.svg" />
        <p>Refresh</p>
      </button>
      <button className="button plus">
        <img src="src/assets/icons/plus.svg" />
        <p>Create Contact</p>
      </button>
    </div>
  );
}
