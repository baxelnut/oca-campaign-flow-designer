import React, { useState } from 'react';
import '../CreateEmailTemplate.css';
import ActionButton from './ActionButton';
import MenuButton from './MenuButton';
import Layout from './Layout';
import ComponentContent from './ComponentContent';
import Content from './Content';
import Comment from './Comment';

export default function TemplateBase() {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorage.getItem('sidebarCollapsed');
    return savedState ? JSON.parse(savedState) : false;
  });

  const [selectedMenu, setSelectedMenu] = useState('Layout');
  const [showPopup, setShowPopup] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => {
      const newState = !prevState;
      localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
      return newState;
    });
  };

  const handleIconClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Layout':
        return <Layout />;
      case 'Component':
        return <ComponentContent />;
      case 'Content':
        return <Content />;
      case 'Comment':
        return <Comment />;
      default:
        return <Layout />;
    }
  };

  return (
    <div className="base">
      <div className="base-left">
        <div>
          <div className="back-button">
            <img src="/icons/back.svg" alt="back" />
          </div>
          {showPopup == false ? (
            <img
              className="navbar_ai_left"
              src="/util/navbar_ai_left.svg"
              alt="navbar"
              onClick={handleIconClick}
            />
          ) : null}
        </div>
        <div className="canvas"></div>
      </div>

      <div className="base-right">
        <div
          className={`sidebar-thingy ${isCollapsed ? 'collapsed' : ''}`}
          onClick={toggleSidebar}
        >
          <img
            src={`/icons/arrow_${isCollapsed ? 'right' : 'left'}_double.svg`}
            alt="toggle"
          />
        </div>

        <div className="content">
          <ActionButton />
          <MenuButton
            selectedMenu={selectedMenu}
            onMenuClick={setSelectedMenu}
          />
          {renderContent()}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="chat-popup-left slide-in-left">
          <div className="chat-header">
            <p>OCA Left Popup</p>
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
