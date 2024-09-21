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

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => {
      const newState = !prevState;
      localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
      return newState;
    });
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
          <img
            className="navbar_ai_left"
            src="/util/navbar_ai_left.svg"
            alt="navbar"
          />
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
    </div>
  );
}
