import React from 'react';
import './Pagination.css';

const Pagination = ({
  perPage,
  setPerPage,
  currentPage,
  totalPages,
  totalItems,
  firstIndex,
  lastIndex,
  handlePageChange,
  showPerPageSelect = true, // Default to true to show the dropdown
}) => {
  const handlePerPageChange = (event) => setPerPage(Number(event.target.value));

  return (
    <div className="pagination">
      <div>
        Showing {firstIndex + 1} - {Math.min(lastIndex, totalItems)} from {totalItems}
      </div>
      <div className="pagination-controls">
        {showPerPageSelect && ( // Conditionally render the select dropdown
          <select value={perPage} onChange={handlePerPageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        )}
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? 'active-page' : ''}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
