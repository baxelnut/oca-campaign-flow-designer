import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import './Contact.css';

const ContactTable = () => {
  const lorem = new LoremIpsum();

  const contactData = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    groupName: lorem.generateWords(2 + (i % 3)), // generates a name with 2-4 words
    dateModified: '12-06-2022 12:12',
    total: Math.floor(Math.random() * 113), // random total between 0-112
  }));

  const handleClick = (type, value) => alert(`${type}: ${value}`);

  return (
    <div >
      <table className="contact-container">
        <thead>
          <tr>
            <th>Contact Group</th>
            <th>Date Modified</th>
            <th>Total</th>
            <th>Status Upload</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {contactData.map(({ id, groupName, dateModified, total }) => (
            <tr key={id}>
              <td onClick={() => handleClick('Contact Group', groupName)}>
                {groupName}
              </td>
              <td>{dateModified}</td>
              <td onClick={() => handleClick('Total', total)}>{total}</td>
              <td
                onClick={() => handleClick('Status', 'Finish')}
                
              >
                <div className="status-finish">Finish</div>
                
              </td>
              <td>
                <span
                  onClick={() => handleClick('View', groupName)}
                  className="icon-action"
                >
                  <img src="src/assets/icons/eye.svg" alt="" />
                </span>
                <span
                  onClick={() => handleClick('Delete', groupName)}
                  className="icon-action"
                >
                  <img src="src/assets/icons/trash.svg" alt="" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <div>Total: 1300</div>
        <div className="pagination-controls">
          Show:{' '}
          <select>
            <option>7</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ContactTable;
