import React from 'react';
import './Dashboard.css';
import HeadContent from './HeadContent';
import Quota from './Quota';
import SuccessRate from './SuccessRate';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <HeadContent/>
      <div className='group'>
      <Quota/>
      <SuccessRate/>
      </div>
    </div>
  );
}
