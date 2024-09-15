import React, { useState, useEffect } from 'react';
import TemplateTable from '../page-components/TemplateTable';
import TemplateCard from '../page-components/TemplateCard';
import TemplateForm from '../page-components/TemplateForm';

export default function TemplateContent() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('');

  useEffect(() => {
    
    fetch('src/data/template_header.txt')
      .then((response) => response.text())
      .then((data) => {
        const parsedData = JSON.parse(data);
        setItems(parsedData);
        setFilteredItems(parsedData); 
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    
    let filtered = items;

    
    if (searchTerm) {
      filtered = filtered.filter((item) => {
        
        const combinedText = `${item.title} ${item.description} ${
          item.additionalDetails || ''
        }`;

        return combinedText.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    
    if (dateRange) {
      const now = new Date();
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.date); 

        switch (dateRange) {
          case 'today':
            return itemDate.toDateString() === now.toDateString();
          case 'last7days':
            return itemDate >= new Date(now.setDate(now.getDate() - 7));
          case 'last30days':
            return itemDate >= new Date(now.setDate(now.getDate() - 30));
          case 'lastyear':
            return itemDate >= new Date(now.setFullYear(now.getFullYear() - 1));
          default:
            return true; 
        }
      });
    }

    setFilteredItems(filtered);
  }, [searchTerm, dateRange, items]);

  return (
    <div className="content">
      {items.map((item, index) => (
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
                src={`/icons/${item.title.toLowerCase()}.svg`}
                alt={`${item.title} icon`}
              />
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
          <TemplateForm
            onSearchChange={(value) => setSearchTerm(value)}
            onDateChange={(value) => setDateRange(value)}
          />
          <div className="details">
            {filteredItems.length > 0 &&
            filteredItems.some(
              (filteredItem) => filteredItem.title === item.title
            ) ? (
              <>
                {/* Render the "details" content here */}
                <p>{item.additionalDetails}</p>
                {item.title === 'WhatsApp' ? (
                  <TemplateTable />
                ) : (
                  <TemplateCard />
                )}
              </>
            ) : (
              <p>No matching details</p>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
