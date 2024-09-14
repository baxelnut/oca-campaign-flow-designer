import React, { useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import './Template.css';

const TemplateTable = () => {
  const lorem = new LoremIpsum();
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const templateData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    groupName: lorem.generateWords(2 + (i % 3)), // generates a name with 2-4 words
    dateModified: '12-06-2024 12:12',
    total: Math.floor(Math.random() * 113), // random total between 0-112
  }));

  const handleClick = (type, value) => alert(`${type}: ${value}`);

  // Pagination logic
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentTemplates = templateData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(templateData.length / perPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePerPageChange = (event) => setPerPage(Number(event.target.value));

  return (
    <div>
      <table className="template-container">
        <thead>
          <tr>
            <th>Template Name</th>
            <th>Date</th>
            <th style={{ textAlign: 'center' }}>Comment</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentTemplates.map(({ id, groupName, dateModified }) => (
            <tr key={id}>
              <td>
                <div className="template-name-checkbox">
                  <input type="checkbox" className="template-checkbox" />
                  <span onClick={() => handleClick('Template Name', groupName)}>
                    {groupName}
                  </span>
                </div>
              </td>
              <td>{dateModified}</td>
              <td
                style={{ textAlign: 'center' }}
                onClick={() => handleClick('Comment', '-')}
              >
                -
              </td>
              <td style={{ justifyContent: 'center' }}>
                <span
                  onClick={() => handleClick('Detail', groupName)}
                  className="icon-action"
                >
                  <a href="">Detail</a>
                </span>
                <span
                  style={{ marginInline: '16px' }}
                  onClick={() => handleClick('Edit', groupName)}
                  className="icon-action"
                >
                  <a href="">Edit</a>
                </span>
                <span
                  onClick={() => handleClick('Delete', groupName)}
                  className="icon-action"
                >
                  <img src="src/assets/icons/delete.svg" alt="" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <div>
          Showing {firstIndex + 1} - {Math.min(lastIndex, templateData.length)}{' '}
          from {templateData.length}
        </div>
        <div className="pagination-controls">
          <select value={perPage} onChange={handlePerPageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
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
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateTable;
