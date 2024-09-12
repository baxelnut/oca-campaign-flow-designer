import React, { useState } from 'react';
import './NavbarSide.css';

export default function NavbarSide() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menus = ['Dashboard', 'Contact', 'Broadcast', 'Template', 'Statistic'];

  return (
    <div className={`navbar-side ${isCollapsed ? 'collapsed' : ''}`}>
      {menus.map((menu, index) => (
        <div
          key={index}
          className={`nav-item ${isCollapsed ? 'collapsed' : ''}`}
          onClick={() => setSelectedMenu(menu)}
        >
          <img
            className={`nav-icon ${selectedMenu === menu ? 'selected' : ''}`}
            src={`src/assets/icons/${menu.toLowerCase()}.svg`}
            alt={menu}
          />
          {!isCollapsed && (
            <p
              className={`nav-title ${selectedMenu === menu ? 'selected' : ''}`}
            >
              {menu}
            </p>
          )}
        </div>
      ))}
      <div className="sidebar-thingy" onClick={toggleSidebar}>
        <img
          src={`src/assets/icons/arrow_${
            isCollapsed ? 'right' : 'left'
          }_double.svg`}
          alt="toggle-sidebar"
        />
      </div>
    </div>
  );
}
