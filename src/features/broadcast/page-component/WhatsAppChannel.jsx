import React, { useState } from 'react';
import ChannelTable from './ChannelTable';

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
    <div className="template-channel whatsapp" onClick={toggleChannel}>
      <div className="channel-head">
        <h2>WhatsApp</h2>
        <img src={`/icons/arrow_${isCollapsed ? 'down' : 'up'}.svg`} />
      </div>
      {isCollapsed && (
        <div className="channel-content">
          <div className="line"></div>
          <div className="head">
            <ChannelTable />
          </div>
        </div>
      )}
    </div>
  );
}
