import React from 'react';

export default function Quota() {
  const items = [
    {
      leading: 'WhatsApp Quota',
      title: 260.921,
      trailing: 'Messages',
      color: { background: '#98E2B4', frontground: '#297837' },
    },
    {
      leading: 'Email Quota',
      title: 176.131,
      trailing: 'Mails',
      color: { background: '#F7427A', frontground: '#FFFFFF' },
    },
  ];

  const loadContent = () => {
    return items.map((item, index) => {
      return (
        <div key={index} className="remaining-quota">
          <p
            className="leading"
            style={{
              background: item.color.background,
              color: item.color.frontground,
            }}
          >
            {item.leading}
          </p>
          <h2 className="title">{item.title.toString()}</h2>
          <p className="trailing">{item.trailing}</p>
        </div>
      );
    });
  };

  return (
    <div className="quota">
      <h2>Remaining Quota</h2>
      {loadContent()}
    </div>
  );
}
