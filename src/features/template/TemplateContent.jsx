import React, { useState, useEffect } from 'react';
import ContactTable from '../contact/ContactTable';
import TemplateTable from './TemplateTable';

export default function TemplateContent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('src/data/template_header.txt')
      .then((response) => response.text())
      .then((data) => {
        const parsedData = JSON.parse(data);
        setItems(parsedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="content">
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div
              className="header"
              style={{
                background: item.background,
              }}
            >
              <div
                className="head-item"
                style={{ borderBottom: `8px solid ${item.bottom}` }}
              >
                <img
                  src={`src/assets/icons/${item.title.toLowerCase()}.svg`}
                  alt={`${item.title} icon`}
                />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            <div className="details">
              <TemplateTable/>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
