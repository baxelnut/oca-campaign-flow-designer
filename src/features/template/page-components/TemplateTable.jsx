import React, { useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import Pagination from '../../../components/util/Pagination';
import '../Template.css';

const TemplateTable = () => {
  const lorem = new LoremIpsum();
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const templateData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    groupName: lorem.generateWords(2 + (i % 3)),
    dateModified: '12-06-2024 12:12',
    total: Math.floor(Math.random() * 113),
  }));

  const handleClick = (type, value) => alert(`${type}: ${value}`);

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentTemplates = templateData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(templateData.length / perPage);

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

      <Pagination
        perPage={perPage}
        setPerPage={setPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={templateData.length}
        firstIndex={firstIndex}
        lastIndex={lastIndex}
        handlePageChange={setCurrentPage}
      />
    </div>
  );
};

export default TemplateTable;
