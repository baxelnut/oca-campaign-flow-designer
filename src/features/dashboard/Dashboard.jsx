import React from 'react';
import './Dashboard.css';
import HeadContent from './HeadContent';
import Quota from './Quota';
import SuccessRate from './SuccessRate';
import BroadcastActivities from './BroadcastActivities';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <HeadContent />
      <div className="group">
        <Quota />
        <SuccessRate />
      </div>
      <BroadcastActivities />
    </div>
  );
}
