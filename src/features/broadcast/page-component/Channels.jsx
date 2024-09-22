import React, { useState, useEffect } from 'react';
import Pagination from '../../../components/util/Pagination';
import { Chart } from 'chart.js';
import DummyStatistic from './DummyStatistic';

export default function Channels() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('');

  Channels;
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorage.getItem('channelCollapsed');
    return savedState ? JSON.parse(savedState) : {};
  });

  const toggleChannel = (index) => {
    setIsCollapsed((prevState) => {
      const newState = { ...prevState, [index]: !prevState[index] };
      localStorage.setItem('channelCollapsed', JSON.stringify(newState));
      return newState;
    });
  };

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

  useEffect(() => {
    fetch('src/data/wa_channel.txt')
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

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const campaignData = [
    {
      campaignName: 'Lorem ipsum',
      contactGroup: 'New user Agustus',
      method: 'Scheduler',
      followUpMessage: true,
      status: 'Processing',
      strategy: 'Click button',
      createdDate: 'August 21st, 2024 12:40 PM',
      action: 'New Blast',
    },
    {
      campaignName: 'Lorem ipsum',
      contactGroup: 'New user September',
      method: 'Instant',
      followUpMessage: true,
      status: 'Delivered',
      strategy: 'Click button',
      createdDate: 'August 21st, 2024 12:40 PM',
      action: 'New Blast',
    },
    {
      campaignName: 'Lorem ipsum',
      contactGroup: 'New user Oktober',
      method: 'Instant',
      followUpMessage: false,
      status: 'Finish',
      strategy: 'Open',
      createdDate: 'August 21st, 2024 12:40 PM',
      action: 'New Blast',
    },
    {
      campaignName: 'Lorem ipsum',
      contactGroup: 'New user November',
      method: 'Instant',
      followUpMessage: false,
      status: 'Delivered',
      strategy: 'Read',
      createdDate: 'August 21st, 2024 12:40 PM',
      action: 'New Blast',
    },
  ];

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentCampaigns = campaignData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(campaignData.length / perPage);

  return (
    <div>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="template-channel">
            <div className="channel-head" onClick={() => toggleChannel(index)}>
              <h2 style={{ color: index === 0 ? '#297837' : '#BA0E44' }}>
                {item.title}
              </h2>
              <img
                src={`/icons/arrow_${isCollapsed[index] ? 'down' : 'up'}.svg`}
                alt="toggle arrow"
              />
            </div>
            {isCollapsed[index] && (
              <div className="channel-content">
                <div className="line"></div>
                <div className="detail">
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
                  <div className="broadcast-form">
                    <div className="search status">
                      <p>Status</p>
                      <select value={dateRange} onChange={handleDateChange}>
                        <option value="">Select Status</option>
                        <option value="all">All</option>
                        <option value="processing">Processing</option>
                        <option value="open">Open</option>
                        <option value="click">Click</option>
                        <option value="terminated">Terminated</option>
                        <option value="failed">Failed</option>
                        <option value="delivered">Delivered</option>
                        <option value="on-schedule">On Schedule</option>
                      </select>
                    </div>

                    <div className="search date">
                      <p>Date</p>
                      <select value={dateRange} onChange={handleDateChange}>
                        <option value="">Select Date</option>
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
                  <div className="channel-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Campaign Name</th>
                          <th>Contact Group</th>
                          <th>Method</th>
                          <th>Follow-up Message</th>
                          <th>Status</th>
                          <th>Strategy</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentCampaigns.map((campaign, index) => (
                          <tr key={index}>
                            <td>
                              <div className="campaign-info">
                                <img
                                  src="/icons/whatsapp.svg"
                                  alt="WhatsApp Icon"
                                />
                                <div>
                                  <p>{campaign.campaignName}</p>
                                  <small>
                                    created on {campaign.createdDate}
                                  </small>
                                </div>
                              </div>
                            </td>
                            <td>{campaign.contactGroup}</td>
                            <td>
                              <span
                                className={`method ${
                                  campaign.method === 'Scheduler'
                                    ? 'scheduler'
                                    : 'instant'
                                }`}
                              >
                                {campaign.method}
                              </span>
                            </td>
                            <td>
                              <span
                                className={`follow-up ${
                                  campaign.followUpMessage ? 'success' : 'error'
                                }`}
                              >
                                {campaign.followUpMessage ? '✔' : '✖'}
                              </span>
                            </td>
                            <td>
                              <span
                                className={`status ${campaign.status.toLowerCase()}`}
                              >
                                {campaign.status}
                              </span>
                            </td>
                            <td>
                              <span
                                className={`strategy ${campaign.strategy.toLowerCase()}`}
                              >
                                {campaign.strategy}
                              </span>
                            </td>
                            <td>
                              <span className="action">
                                <a href="#">Report</a>
                                <a href="#">{campaign.action}</a>
                                <button className="delete-btn">✖</button>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <Pagination
                      perPage={perPage}
                      setPerPage={setPerPage}
                      currentPage={currentPage}
                      totalPages={totalPages}
                      totalItems={campaignData.length}
                      firstIndex={firstIndex}
                      lastIndex={lastIndex}
                      handlePageChange={setCurrentPage}
                    />
                  </div>
                </div>
                <div className='stat'>
                  <div
                    className="stat-head"
                    style={{ background: index === 0 ? '#297837' : '#BA0E44' }}
                  >
                    <h3>{`${item.title} Statistic`}</h3>
                  </div>
                  <DummyStatistic />
                </div>
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
