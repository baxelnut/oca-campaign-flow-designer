import React from 'react';
import LeadingTemplateName from './LeadingTemplateName';
import LeadingHeader from './LeadingHeader';
import LeadingBody from './LeadingBody';
import LeadingVariables from './LeadingVariables';
import LeadingButton from './LeadingButton';

export default function LeadingMain() {
  return (
    <div className="leading">
      <LeadingTemplateName />
      <LeadingHeader />
      <LeadingBody />
      <LeadingVariables />
      <LeadingButton/>
    </div>
  );
}
