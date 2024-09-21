import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../CreateEmailTemplate.css'

export default function Content() {
  const [value, setValue] = useState('');

  return (
    <div className='base-content-menu'>
      <form className="dropdown" action="" method="get">
        <ReactQuill
          className="base-content-menu-quill"
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
  );
}
