import React from 'react';

export default function DummyStatistic() {
  return (
    <div className="dummy-statistic-container">
      {/* Export Button */}
      <div className="export-button-container">
        <button className="export-button">Export</button>
      </div>

      {/* Metrics Section */}
      <div className="dummy-statistics-metrics">
        {/* Date Filter Section */}
        <div className="dummy-statistics-filter">
          <label>Date</label>
          <div className="date-picker">
            <input type="text" placeholder="Select Date" />
            <button className="search-button">Search</button>
          </div>
        </div>
        <div className="dummy-stat-box total-message">
          <h4>450</h4>
          <p>Total Message</p>
        </div>
        <div className="dummy-stat-box message-delivered">
          <h4>90</h4>
          <p>Message Delivered</p>
        </div>
        <div className="dummy-stat-box message-open">
          <h4>242</h4>
          <p>Message Open</p>
        </div>
        <div className="dummy-stat-box message-click">
          <h4>60</h4>
          <p>Message Click button / link</p>
        </div>
        <div className="dummy-stat-box message-failed">
          <h4>10</h4>
          <p>Message Failed</p>
        </div>
      </div>

      {/* Dummy Chart Section */}
      <div className="dummy-chart-container">
        <h4>Dummy Chart</h4>
        <div className="dummy-chart-placeholder">[Graph Image Placeholder]</div>
      </div>
    </div>
  );
}
