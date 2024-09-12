import React from 'react';
import './NavbarSide.css';

export default function NavbarSide() {
  const menus = ['Dashboard', 'Contact', 'Broadcast', 'Template', 'Statistic'];

  return (
    <div className="navbar-side">
      {menus.map((menu, index) => (
        <div key={index} className="nav-item">
          <img
            className="nav-icon"
            src={`src/assets/icons/${menu.toLowerCase()}.svg`}
          />
          <p className="nav-title">{menu}</p>
        </div>
      ))}
    </div>
  );
}
