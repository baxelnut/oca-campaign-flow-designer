import React, { useState } from 'react';
import './NavbarSide.css';

export default function NavbarSide() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menus = ['Dashboard', 'Contact', 'Broadcast', 'Template', 'Statistic'];

  return (
    <div className={`navbar-side ${isCollapsed ? 'collapsed' : ''}`}>
      {menus.map((menu, index) => (
        <div key={index} className={`nav-item ${isCollapsed ? 'collapsed' : ''}`}>
          <img
            className="nav-icon"
            src={`src/assets/icons/${menu.toLowerCase()}.svg`}
            alt={menu}
          />
          {/* Hide title when collapsed */}
          {!isCollapsed && <p className="nav-title">{menu}</p>}{' '}
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
