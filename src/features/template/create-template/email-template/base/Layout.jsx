import React from 'react';

export default function Layout() {
  const loadContent = () => {
    const content = [];
    for (let i = 0; i <= 7; i++) {
      content.push(
        <div className="layout-item" key={i}>
          <img src={`/images/layout ${i + 1}.png`} />
        </div>
      );
    }

    return content;
  };

  return <div className="layout">{loadContent()}</div>;
}
