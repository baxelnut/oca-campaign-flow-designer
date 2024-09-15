import React, { useState } from 'react';

export default function TemplateForm({ onDateChange, onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDateRange(value);
    onDateChange(value);
  };

  return (
    <div className="template-form">
      <div className="search date">
        <p>Date</p>
        <select value={dateRange} onChange={handleDateChange}>
          <option value="">Select date</option>
          <option value="today">Today</option>
          <option value="last7days">Last 7 Days</option>
          <option value="last30days">Last 30 Days</option>
          <option value="lastyear">Last Year</option>
          <option value="custom">Custom Range</option>
        </select>
      </div>

      <div className="search campaign">
        <p>Search by Campaign Name</p>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Type here..."
        />
      </div>
    </div>
  );
}
