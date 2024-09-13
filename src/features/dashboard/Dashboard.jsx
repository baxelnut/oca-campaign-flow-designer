import React from 'react';
import './Dashboard.css';
import HeadContent from './HeadContent';
import Quota from './Quota';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <HeadContent/>
      <div className='group'>
      <Quota/>
      </div>
    </div>
  );
}
