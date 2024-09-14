import React from 'react';

export default function TemplateContent(title) {
  const items = [
    {
      title: 'WhatsApp',
      description: 'here you can see your whatsapp template collections.',
      bottom: '#35B86D',
      background: '#EBF8F0',
    },
    {
      title: 'Email',
      description: 'here you can see your Email template collections.',
      bottom: '#F6A0BB',
      background: '#FEF3F6',
    },
  ];
  return (
    <div className="content">
      {items.map((item, index) => {
        return (
          <>
            <div
              className="header"
              key={index}
              style={{
                background: item.background,
              }}
            >
              <div
                className="head-item"
                style={{ borderBottom: `8px solid ${item.bottom}` }}
              >
                <img src={`src/assets/icons/${item.title.toLowerCase()}.svg`} />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            <div className="details">a</div>
          </>
        );
      })}
    </div>
  );
}
