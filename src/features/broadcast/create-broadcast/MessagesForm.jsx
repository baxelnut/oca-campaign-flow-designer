import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import Select from 'react-select';
import 'react-quill/dist/quill.snow.css';

const MessageForm = () => {
  const [campaignName, setCampaignName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [contentGroup, setContentGroup] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const [message, setMessage] = useState('');
  const [mediaLink, setMediaLink] = useState('');
  const [mediaFileName, setMediaFileName] = useState('');

  const messageTypeOptions = [
    { value: 'manual', label: 'Manual' },
    { value: 'template', label: 'Template Message' },
  ];

  const contentGroupOptions = [
    { value: 'group1', label: 'Group 1' },
    { value: 'group2', label: 'Group 2' },
  ];

  const failOverOptions = [
    { value: 'none', label: 'None' },
    { value: 'email', label: 'Email' },
    { value: 'whatsapp', label: 'WhatsApp' },
  ];

  const [value, setValue] = useState('');

  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmitClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSaveClick = () => {
    setShowPopup(false);
    setShowSuccessPopup(true);

    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 3000);
  };

  return (
    <div className="main-message-form">
      <h2>Main Message</h2>
      <div className="general-settings">
        <h3>General Settings</h3>
        <div>
          <label>Campaign Name</label>
          <input
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
          />
        </div>
        <div>
          <label>Sender Name</label>
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
        </div>
        <div>
          <label>Sender Email</label>
          <input
            type="email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label>Content Group</label>
          <Select
            options={contentGroupOptions}
            value={contentGroup}
            onChange={setContentGroup}
          />
        </div>
        <div>
          <label>Message Type</label>
          <Select
            options={messageTypeOptions}
            value={messageType}
            onChange={setMessageType}
          />
        </div>
      </div>

      <div className="content-section">
        <h3>Content</h3>
        <div>
          <label>Media Link</label>
          <input
            type="text"
            value={mediaLink}
            onChange={(e) => setMediaLink(e.target.value)}
          />
        </div>
        <div>
          <label>Media File Name</label>
          <input
            type="text"
            value={mediaFileName}
            onChange={(e) => setMediaFileName(e.target.value)}
          />
        </div>
        <div>
          <form className="dropdown" action="" method="get">
            <label htmlFor="body">Message</label>
            <ReactQuill
              className="body-quill"
              id="body"
              theme="snow"
              value={value}
              onChange={setValue}
              placeholder="Type your message here..."
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ list: 'ordered' }, { list: 'bullet' }],
                  ['link'],
                ],
              }}
            />
          </form>
        </div>
      </div>

      <div className="broadcast-preview">
        <h3>Main Broadcast Preview</h3>
        <div className="preview-box">
          {/* Sample Broadcast Preview */}
          <img src="\images\preview-image.png" alt="Broadcast Preview" />
        </div>
      </div>

      <div className="failover-settings">
        <h3>Fail Over Settings</h3>
        <div>
          <label>Choose Channel</label>
          <Select options={failOverOptions} />
        </div>
      </div>

      <div className="form-actions">
        <button className="btn-back"> Back to Broadcast List</button>
        <button
          className="btn-create"
          type="submit"
          onClick={handleSubmitClick}
        >
          CREATE BROADCAST
        </button>
        {/* Confirmation Popup */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>Your broadcast would be done...</h2>
              <p>
                Make sure the broadcast attributes is correct. The message does
                not contain inappropriate or unlawful words in Indonesia. For
                more info please read the Terms and Condition of Whatsapp
                broadcast.
              </p>

              <div className="popup-buttons">
                <button className="not-sure-button" onClick={handleClosePopup}>
                  I’m not sure
                </button>
                <button className="save-button" onClick={handleSaveClick}>
                  YES, SUBMIT!
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Popup */}
        {showSuccessPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <img src="/icons/complete.svg" alt="Success" />
              <h2>Broadcast Created !</h2>
              <p>You can see the processing on Broadcast List </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageForm;
