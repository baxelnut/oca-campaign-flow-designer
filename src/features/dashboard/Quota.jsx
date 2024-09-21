import React, { useState, useEffect } from 'react';
import './Dashboard.css';

export default function Quota() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('src/data/quota_data.txt')
      .then((response) => response.text())
      .then((data) => {
        const parsedData = JSON.parse(data);
        setItems(parsedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const loadContent = () => {
    return items.map((item, index) => {
      return (
        <div key={index} className="remaining-quota">
          <p
            className="leading"
            style={{
              background: item.color.background,
              color: item.color.frontground,
            }}
          >
            {item.leading}
          </p>
          <h2 className="title">{item.title.toString()}</h2>
          <p className="trailing">{item.trailing}</p>
        </div>
      );
    });
  };

  return (
    <div className="quota">
      <h2>Remaining Quota</h2>
      {loadContent()}
    </div>
  );
}
