import React, { useState } from 'react';
import '../CreateEmailTemplate.css';
import ActionButton from './ActionButton';
import MenuButton from './MenuButton';
import Layout from './Layout';

export default function TemplateBase() {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorage.getItem('sidebarCollapsed');
    return savedState ? JSON.parse(savedState) : false;
  });

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => {
      const newState = !prevState;
      localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div className="base">
      <div className="base-left">
        <div>
          <div className="back-button">
            <img src="/icons/back.svg" />
          </div>
          <img className="navbar_ai_left" src="/util/navbar_ai_left.svg" />
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
          />
        </div>

        <div className="content">
          <ActionButton />
          <MenuButton />
          <Layout />
        </div>
      </div>
    </div>
  );
}
