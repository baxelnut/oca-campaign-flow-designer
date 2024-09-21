import React from 'react';
import Breadcrumbs from '../../page-components/Breadcrumbs';
import './CreateEmailTemplate.css';
import TemplateBase from './base/TemplateBase';

export default function CreateEmailTemplate() {
  const path = 'Template/Create/Email Template';
  const currentPath = '/template/create/email_template';

  return (
    <div className="email-template">
      <h2>Create Email Template</h2>
      <Breadcrumbs path={path} currentPath={currentPath} />
      <TemplateBase/>
    </div>
  );
  re;
}
