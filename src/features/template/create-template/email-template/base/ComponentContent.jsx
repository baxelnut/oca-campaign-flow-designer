import React from 'react';

export default function ComponentContent() {
  const loadContent = () => {
    const content = [];
    const subtitle = [
      'Text',
      'Boxed Text',
      'Divider',
      'Image',
      'Image Group',
      'Image Card',
      'Image + Text',
      'Video',
      'Button',
      'Share',
      'Social Follow',
      'Footer',
    ];
    for (let i = 0; i <= 11; i++) {
      content.push(
        <div className="component-item" key={i}>
          <img src={`/images/component/component${i + 1}.png`} />
          <p>{subtitle[i]}</p>
        </div>
      );
    }

    return content;
  };

  return <div className="component-content">{loadContent()}</div>;
}
