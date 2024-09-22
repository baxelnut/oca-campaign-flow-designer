import React, { useState, useEffect } from 'react';
import Pagination from '../../../components/util/Pagination';

export default function WAChannelTable() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('');

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
    <div className="content">
      {items.map(
        (item, index) =>
          index === 0 && (
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
            </React.Fragment>
          )
      )}
      <div className="wa-channel-table">
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
                    <img src="/icons/whatsapp.svg" alt="WhatsApp Icon" />
                    <div>
                      <p>{campaign.campaignName}</p>
                      <small>created on {campaign.createdDate}</small>
                    </div>
                  </div>
                </td>
                <td>{campaign.contactGroup}</td>
                <td>
                  <span
                    className={`method ${
                      campaign.method === 'Scheduler' ? 'scheduler' : 'instant'
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
                  <span className={`status ${campaign.status.toLowerCase()}`}>
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
  );
}
