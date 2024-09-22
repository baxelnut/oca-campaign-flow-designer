import React from 'react';
import './BroadcastPage.css';
import '../dashboard/Dashboard.css';
import BroadcastPageButton from './page-component/BroadcastPageButton';
import Quota from '../dashboard/Quota';
import SuccessRate from '../dashboard/SuccessRate';
import Channels from './page-component/Channels';

export default function BroadcastPage() {
  return (
    <div className="broadcast-page">
      <h1>BROADCAST</h1>
      <BroadcastPageButton />
      <div className="group">
        <Quota />
        <SuccessRate />
      </div>
      <div className="channel">
        <div className='title'>
          <h2>Channel</h2>
          <div className="line"></div>
        </div>
        <Channels/>
        
      </div>
    </div>
  );
}
