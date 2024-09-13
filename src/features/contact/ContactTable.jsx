import React, { useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import './Contact.css';

const ContactTable = () => {
  const lorem = new LoremIpsum();
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const contactData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    groupName: lorem.generateWords(2 + (i % 3)), // generates a name with 2-4 words
    dateModified: '12-06-2022 12:12',
    total: Math.floor(Math.random() * 113), // random total between 0-112
  }));

  const handleClick = (type, value) => alert(`${type}: ${value}`);

  // Pagination logic
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentContacts = contactData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(contactData.length / perPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePerPageChange = (event) => setPerPage(Number(event.target.value));

  return (
    <div>
      <table className="contact-container">
        <thead>
          <tr>
            <th>Contact Group</th>
            <th>Date Modified</th>
            <th>Total</th>
            <th style={{ textAlign: 'center' }}>Status Upload</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.map(({ id, groupName, dateModified, total }) => (
            <tr key={id}>
              <td onClick={() => handleClick('Contact Group', groupName)}>
                {groupName}
              </td>
              <td>{dateModified}</td>
              <td onClick={() => handleClick('Total', total)}>{total}</td>
              <td onClick={() => handleClick('Status', 'Finish')}>
                <div className="status-finish">Finish</div>
              </td>
              <td>
                <span onClick={() => handleClick('View', groupName)} className="icon-action">
                  <a href="">Detail</a>
                </span>
                <span onClick={() => handleClick('Delete', groupName)} className="icon-action">
                  <img src="src/assets/icons/delete.svg" alt="" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <div>Showing {firstIndex + 1} - {Math.min(lastIndex, contactData.length)} from {contactData.length}</div>
        <div className="pagination-controls">
          <select value={perPage} onChange={handlePerPageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            &lt;
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? 'active-page' : ''}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactTable;
