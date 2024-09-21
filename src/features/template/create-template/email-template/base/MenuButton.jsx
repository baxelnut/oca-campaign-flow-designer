import React, { useState, useEffect } from 'react';

export default function MenuButton() {
  const [selectedMenu, setSelectedMenu] = useState('layout');

  const menus = ['Layout', 'Component', 'Content', 'Comment'];

  useEffect(() => {
    const currentPath = window.location.pathname.slice(1).toLowerCase(); // Using window.location since location wasn't imported
    const matchedMenu =
      menus.find((menu) => menu.toLowerCase() === currentPath) || 'layout';
    setSelectedMenu(matchedMenu);
  }, []);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="menu-button">
      <p>Here you can drag or click the component to the canvas</p>
      <div className="menu-container">
        {menus.map((menu, index) => (
          <div
            key={index}
            className={`menu ${selectedMenu === menu ? 'selected' : ''}`}
            onClick={() => handleMenuClick(menu)}
          >
            {menu}
          </div>
        ))}
      </div>
    </div>
  );
}
