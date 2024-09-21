import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

export default function LeadingBody() {
  const [value, setValue] = useState('');

  return (
    <div className="body">
      <div className="title">
        <p>Body</p>
        <form className="dropdown" action="" method="get">
          <label htmlFor="body">
            Enter the text for your message in the language you’ve selected.
          </label>
          <ReactQuill
          className='body-quill'
            id="body"
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Type your message here..."
            modules={{
              toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['link'],
              ],
            }}
          />
        </form>
      </div>
    </div>
  );
}
