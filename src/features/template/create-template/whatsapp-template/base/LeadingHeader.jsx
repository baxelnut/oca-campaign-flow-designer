import React from 'react'

export default function LeadingHeader() {
  return (
    <div className="header">
        <div className="title">
          <p>Header</p>
          <div className="title box">Optional</div>
        </div>
        <form className="dropdown" action="" method="get">
          <label for="header">
            Add a title or choose which type of media you’ll use for these
            header.
          </label>
          <select name="header" id="header">
            <option value="none">None</option>
            <option value="media">Media</option>
            <option value="text">Text</option>
          </select>
        </form>
      </div>
  )
}
