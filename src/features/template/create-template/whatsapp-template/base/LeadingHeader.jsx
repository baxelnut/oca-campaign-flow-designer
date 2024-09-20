import React, { useState } from 'react';

export default function LeadingHeader() {
  const [selectedOption, setSelectedOption] = useState('none');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleOnClick = (key) => {
    console.log(`Clicked ${key.toString()}`);
  };

  const buttonItems = [
    { id: 1, icon: '/icons/image.svg', label: 'Images' },
    { id: 2, icon: '/icons/video.svg', label: 'Video' },
    { id: 3, icon: '/icons/document.svg', label: 'Document' },
  ];

  return (
    <div className="header">
      <div className="title">
        <p>Header</p>
        <div className="title box">Optional</div>
      </div>
      <form className="dropdown" action="" method="get">
        <label for="header">
          Add a title or choose which type of media you’ll use for these header.
        </label>
        <select
          name="header"
          id="header"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="none">None</option>
          <option value="media">Media</option>
          <option value="text">Text</option>
        </select>
      </form>

      {selectedOption === 'media' && (
        <div className="media-container">
          <p>
            You can directly attach some blasting files from File Management. If
            you haven't uploaded some files, you can upload them
            <a href=""> here</a>
          </p>

          <div className="button-container">
            {buttonItems.map((item) => (
              <div
                className="button-item"
                key={item.id}
                onClick={() => handleOnClick(item.label)}
              >
                <div className="circle-container">
                  <div className="circle"></div>
                </div>
                <div className="item-content">
                  <img src={item.icon} alt={item.label} />
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

{
  selectedOption === 'text' && (
    <div className='text-input'>
      <input type="text" name="" id="" placeholder="Type here..." />
    </div>
  )
}
      {/* {selectedOption === 'linking' && (
        <div className="linking-container">
          <div className="link-item">
            <label>Button Text</label>
            <input type="text" placeholder="Type here" />
          </div>
          <div className="link-item">
            <label>Website URL</label>
            <input type="text" placeholder="Type here" />
          </div>
        </div>
      )} */}
    </div>
  );
}
