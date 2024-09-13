import React from 'react';

export default function ContactButtons() {
  return (
    <div className="contact-buttons">
      <button className="refresh">
        <img src="src/assets/icons/refresh.svg" />
        <p>Refresh</p>
      </button>

      <button className="add-broadcast">
        <img src="src/assets/icons/add.svg" />
        <p>Add Broadcast</p>
      </button>
    </div>
  );
}
