import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './CreateBroadcast.css';
import Breadcrumbs from '../../template/page-components/Breadcrumbs';

export default function CreateBroadcast() {
  //   const navigate = useNavigate();
  const path = 'Broadcast/Create';
  const currentPath = '/broadcast/create';

  return (
    <div className="create-broadcast">
      <h2>Create Broadcast</h2>
      <Breadcrumbs path={path} currentPath={currentPath} />
      <div className="container">
        <div className="item channels">
          <h4>Channel</h4>

          <div className="option email">
            <p>
              <input type="checkbox" name="" id="" />
              Email
            </p>
          </div>
          <div className="option wa">
            <p>
              <input type="checkbox" name="" id="" />
              WhatsApp
            </p>
          </div>
        </div>
        <div className="item type">
          <h4>Broadcast Type</h4>
          <div className="option instant">
            <p>
              <input type="checkbox" name="" id="" />
              Instant
            </p>
          </div>
          <div className="option scheduler">
            <p>
              <input type="checkbox" name="" id="" />
              Scheduler
            </p>
          </div>
        </div>
        <button className="item button">Get the Form!</button>
      </div>
    </div>
  );
}
