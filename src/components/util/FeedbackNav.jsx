import React from 'react';
import { useLocation } from 'react-router-dom';
import './FeedbackNav.css';

export default function FeedbackNav() {
  const location = useLocation();

  const isWhatsAppTemplateRoute =
    location.pathname === '/template/create/whatsapp_template';

  const imagePath = isWhatsAppTemplateRoute
    ? '/util/navbar_ai_right.svg'
    : '/util/navbar_feedback.svg';

  const handleClick = () => {
    if (isWhatsAppTemplateRoute) {
      console.log('AI Right image clicked!');
    } else {
      console.log('Feedback image clicked!');
    }
  };

  const whoYouIs = isWhatsAppTemplateRoute ? 'ai-nav' : 'feedback-nav';

  return (
    <div className={whoYouIs} onClick={handleClick}>
      <img src={imagePath} />
    </div>
  );
}
