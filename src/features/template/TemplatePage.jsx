import React from 'react';
import './Template.css';
import TemplateButtons from './TemplateButtons';
import TemplateHeader from './TemplateContent';
import TemplateContent from './TemplateContent';

export default function TemplatePage() {
  return (
    <div className="template-page">
      <h1>TEMPLATE</h1>
      <TemplateButtons />
      <TemplateContent/>
    </div>
  );
}
