import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './FeedbackNav.css';

export default function FeedbackNav() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  const isWhatsAppTemplateRoute =
    location.pathname === '/template/create/whatsapp_template';

  const imagePath = isWhatsAppTemplateRoute
    ? '/util/navbar_ai_right.svg'
    : '/util/navbar_feedback.svg';

  const handleClick = () => {
    if (isWhatsAppTemplateRoute) {
      console.log('AI Right image clicked!');
      setShowPopup(true);
    } else {
      console.log('Feedback image clicked!');
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className={isWhatsAppTemplateRoute ? 'ai-nav' : 'feedback-nav'}>
      {showPopup == false ? (
        <img src={imagePath} onClick={handleClick} alt="nav icon" />
      ) : null}
      {showPopup && (
        <div className="chat-popup slide-in">
          <div className="chat-header">
            <p>OCA Chabot Copywriting</p>
            <button onClick={handleClose}>×</button>
          </div>
          <div className="chat-body">
            <div className="chat-message-bot">
              <p>Halo, Selamat datang</p>
              <span>
                OCA AI Copywriting membantu anda menemukan ide kalimat.
              </span>
            </div>
            <div className="chat-message-user">
              <p>
                Bantu saya buatkan ide kalimat promosi produk jasa desain web
                untuk platform email ataupun WhatsApp
              </p>
            </div>
            <div className="chat-message-bot">
              <p>
                Tentu, saya bantu buatkan beberapa contoh copywriting untuk jasa
                desain web yang bisa Anda gunakan untuk platform email atau
                WhatsApp...
              </p>
            </div>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
