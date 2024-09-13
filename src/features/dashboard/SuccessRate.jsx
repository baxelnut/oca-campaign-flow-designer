import React, { useState, useEffect } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SuccessRate() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('src/data/success_rate_data.txt')
      .then((response) => response.text())
      .then((data) => {
        const parsedData = JSON.parse(data);
        setItems(parsedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const loadContent = () => {
    return items.map((item, index) => (
      <div key={index} className="success-rate">
        <div>
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
        <div
          className="bar"
          style={{
            stroke: item.color.barcolor,
          }}
        >
          <CircularProgressbar
            value={item.barpercentage}
            text={`${item.barpercentage}%`}
          />
        </div>
      </div>
    ));
  };

  const loadContentDetails = () => {
    return items.map((item, index) => (
      <div className="group" key={index}>
        <div
          className="details"
          style={{
            background: '#BA0E44',
          }}
        >
          <h2>{item.details.blasting.remaining}</h2>
          <p>{item.details.blasting.title}</p>
        </div>
        <div
          className="details mid"
          style={{
            background: '#2F80ED',
          }}
        >
          <h2>{item.details.scheduler.remaining}</h2>
          <p>{item.details.scheduler.title}</p>
        </div>
        <div
          className="details"
          style={{
            background: '#35B86D',
          }}
        >
          <h2>{item.details.instant.remaining}</h2>
          <p>{item.details.instant.title}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="success">
      <h2>Success Rate</h2>
      <div className="container">{loadContent()}</div>
      <div className="container-details">{loadContentDetails()}</div>
    </div>
  );
}
