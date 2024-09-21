import React, { useState, useEffect } from 'react';

export default function MenuButton({ selectedMenu, onMenuClick }) {
  const menus = ['Layout', 'Component', 'Content', 'Comment'];

  useEffect(() => {
    const currentPath = window.location.pathname.slice(1).toLowerCase();
    const matchedMenu =
      menus.find((menu) => menu.toLowerCase() === currentPath) || 'layout';
    onMenuClick(matchedMenu);
  }, []);

  return (
    <div className="menu-button">
      <p>Here you can drag or click the component to the canvas</p>
      <div className="menu-container">
        {menus.map((menu, index) => (
          <div
            key={index}
            className={`menu ${selectedMenu === menu ? 'selected' : ''}`}
            onClick={() => onMenuClick(menu)}
          >
            {menu}
          </div>
        ))}
      </div>
    </div>
  );
}
