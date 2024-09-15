import React from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../page-components/Breadcrumbs';
import './CreateTemplate.css';

export default function CreateTemplatePage() {
  const navigate = useNavigate();
  const path = 'Template/Create';
  const currentPath = '/template/create';

  const handleWhatsAppClick = () => {
    navigate('/template/create/whatsapp_template');
  };

  const handleEmailClick = () => {
    navigate('/template/create/email_template');
  };

  return (
    <div className="create-template">
      <h2>Create Template</h2>
      <Breadcrumbs path={path} currentPath={currentPath} />
      <div className="container">
        <div className="content email" onClick={handleEmailClick}>
          <img src="/icons/email.svg" alt="Email" />
          <h3>Email</h3>
        </div>
        <div className="content whatsapp" onClick={handleWhatsAppClick}>
          <img src="/icons/whatsapp.svg" alt="WhatsApp" />
          <h3>WhatsApp</h3>
        </div>
      </div>
    </div>
  );
}
