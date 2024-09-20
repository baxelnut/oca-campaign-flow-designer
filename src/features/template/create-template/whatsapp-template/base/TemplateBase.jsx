import React from 'react';
import HeadContent from './HeadContent';
import LeadingMain from './LeadingMain';
import TrailingMain from './TrailingMain';

export default function TemplateBase() {
  return (
    <div className="base">
      <div className="back-button">
        <img src="/icons/back.svg" />
      </div>
      <div className="base-content">
        <HeadContent />
        <div className="main">
          <LeadingMain />
          <TrailingMain />
        </div>
      </div>
    </div>
  );
}
