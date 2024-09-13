import React, { useState, useEffect } from 'react';
import './NavbarSide.css';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarSide() {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorage.getItem('sidebarCollapsed');
    return savedState ? JSON.parse(savedState) : false;
  });
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => {
      const newState = !prevState;
      localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
      return newState;
    });
  };

  const menus = ['Dashboard', 'Contact', 'Broadcast', 'Template', 'Statistic'];

  useEffect(() => {
    const currentPath = location.pathname.slice(1).toLowerCase();
    const matchedMenu =
      menus.find((menu) => menu.toLowerCase() === currentPath) || 'dashboard';
    setSelectedMenu(matchedMenu);
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
