import React from 'react';

export default function ActionButton() {
  return (
    <div className="action-button">
      <button className="generate" type="submit">
        GENERATE
      </button>
      <button className="save" type="submit">
        Save as Draft
      </button>
    </div>
  );
}
