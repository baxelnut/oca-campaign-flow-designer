import React from 'react';
import './Template.css';
import TemplateButtons from './page-components/TemplateButtons';
import TemplateContent from './page-components/TemplateContent';

export default function TemplatePage() {
  return (
    <div className="template-page">
      <h1>TEMPLATE</h1>
      <TemplateButtons />
      <TemplateContent />
    </div>
  );
}
