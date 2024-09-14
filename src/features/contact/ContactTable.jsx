import React, { useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import Pagination from '../../components/util/Pagination';
import './Contact.css';

const ContactTable = () => {
  const lorem = new LoremIpsum();
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const contactData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    groupName: lorem.generateWords(2 + (i % 3)),
    dateModified: '12-06-2022 12:12',
    total: Math.floor(Math.random() * 113),
  }));

  const handleClick = (type, value) => alert(`${type}: ${value}`);

  // pagination logic
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentContacts = contactData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(contactData.length / perPage);

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
      
      <Pagination
        perPage={perPage}
        setPerPage={setPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={contactData.length}
        firstIndex={firstIndex}
        lastIndex={lastIndex}
        handlePageChange={setCurrentPage}
      />
    </div>
  );
};

export default ContactTable;
