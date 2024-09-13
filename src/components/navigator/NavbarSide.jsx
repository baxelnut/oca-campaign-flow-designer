import React, { useState, useEffect } from 'react';
import './NavbarSide.css';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarSide() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menus = ['Dashboard', 'Contact', 'Broadcast', 'Template', 'Statistic'];

  useEffect(() => {
    const currentPath = location.pathname.slice(1);
    const currentMenu =
      menus.find((menu) => menu.toLowerCase() === currentPath) || 'Dashboard';
    setSelectedMenu(currentMenu);
  }, [location.pathname]);

  return (
    <div className={`navbar-side ${isCollapsed ? 'collapsed' : ''}`}>
      {menus.map((menu, index) => (
        <Link key={index} to={`/${menu.toLowerCase()}`}>
          <div
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
                className={`nav-title ${
                  selectedMenu === menu ? 'selected' : ''
                }`}
              >
                {menu}
              </p>
            )}
          </div>
        </Link>
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
