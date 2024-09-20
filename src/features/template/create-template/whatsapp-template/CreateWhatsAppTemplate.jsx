import React from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../page-components/Breadcrumbs';
import './CreateWhatsAppTemplate.css';
import ActionButton from './ActionButton';
import TemplateBase from './base/TemplateBase';

export default function CreateWhatsAppTemplate() {
  const navigate = useNavigate();
  const path = 'Template/Create/WhatsApp Template';
  const currentPath = '/template/create/whatsapp_template';

  return (
    <div className="wa-template">
      <h2>Create WhatsApp Template</h2>
      <Breadcrumbs path={path} currentPath={currentPath} />
      <ActionButton />
      <TemplateBase />
    </div>
  );
}
