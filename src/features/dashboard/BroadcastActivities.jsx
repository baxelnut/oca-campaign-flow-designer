import React, { useEffect, useState } from 'react';

export default function BroadcastActivities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('src/data/broadcast_data.txt')
      .then((response) => response.json())
      .then((data) => setActivities(data))
      .catch((error) => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="broadcast-activities">
      <h2>Recent Broadcast Activities</h2>
      <div className="broadcast-container">
        <table>
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Channel</th>
              <th>Contact</th>
              <th>Total Broadcast</th>
              <th>Created Date</th>
              <th>Broadcast Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                <td>
                  <a href="#">{activity.name}</a>
                </td>
                <td>{activity.channel}</td>
                <td>{activity.contact}</td>
                <td>{activity.total}</td>
                <td>{activity.createdDate}</td>
                <td>{activity.broadcastDate}</td>
                <td>{activity.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
