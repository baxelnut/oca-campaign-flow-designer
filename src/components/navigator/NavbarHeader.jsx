import React from 'react';
import './NavbarHeader.css';

export default function NavbarHeader() {
  return (
    <div className="navbar-header">
      <img
        className="oca-logo"
        src="src\assets\logos\logo_oca_horizontal.svg"
      />
      <div className="profile-container">
        <img
          className="profile-picture"
          src="src\assets\images\default_profile.png"
        />
        <p className="username">Tim OCA 35</p>
        <img className="arrow-down" src="src\assets\icons\arrow_down.svg" />
        <img className="settings" src="src\assets\icons\settings.svg" />
      </div>
    
      <img className="telkom-logo" src="src\assets\logos\logo_telkom.svg" />
    </div>
  );
}
