import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../page-components/Breadcrumbs';
import './CreateTemplate.css';

export default function CreateTemplatePage() {
  const location = useLocation();
  const path = 'Template/Create';
  const currentPath = '/template/create';

  return (
    <div className="create-template">
      <h2>Create Template</h2>
      <Breadcrumbs path={path} currentPath={currentPath} />
      <div className="container">
        
        <div className="content email">
          <img src="\icons\email.svg" />
          <h3>Email</h3>
        </div>
        <div className="content whatsapp">
          <img src="\icons\whatsapp.svg" />
          <h3>WhatsApp</h3>
        </div>
      </div>
    </div>
  );
}
