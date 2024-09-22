import React, { useState } from 'react';
import WAChannelTable from './WAChannelTable';

export default function WhatsAppChannel() {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorage.getItem('channelCollapsed');
    return savedState ? JSON.parse(savedState) : false;
  });

  const toggleChannel = () => {
    setIsCollapsed((prevState) => {
      const newState = !prevState;
      localStorage.setItem('channelCollapsed', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <div className="template-channel whatsapp">
      <div className="channel-head" onClick={toggleChannel}>
        <h2>WhatsApp</h2>
        <img src={`/icons/arrow_${isCollapsed ? 'down' : 'up'}.svg`} />
      </div>
      {isCollapsed && (
        <div className="channel-content">
          <div className="line"></div>
          <div className="detail">
            <WAChannelTable />
          </div>
        </div>
      )}
    </div>
  );
}
