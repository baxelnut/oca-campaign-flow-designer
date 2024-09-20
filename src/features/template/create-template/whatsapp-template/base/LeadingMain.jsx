import React from 'react';
import LeadingTemplateName from './LeadingTemplateName';
import LeadingHeader from './LeadingHeader';
import LeadingBody from './LeadingBody';

export default function LeadingMain() {
  return (
    <div className="leading">
      <LeadingTemplateName />
      <LeadingHeader />
      <LeadingBody />
    </div>
  );
}
