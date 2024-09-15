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
    </div>
  );
}
