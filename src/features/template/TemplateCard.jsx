import React, { useState, useEffect } from 'react';
import Pagination from '../../components/util/Pagination';

function TemplateCard() {
  const [templateData, setTemplateData] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('src/data/template_card.tx')
      .then((response) => response.json())
      .then((data) => setTemplateData(data))
      .catch((error) => console.error('Error fetching template data:', error));
  }, []);

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentTemplates = templateData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(templateData.length / perPage);

  return (
    <>
      <div className="card-holder">
        {currentTemplates.map((template) => (
          <div key={template.id} className="template-card">
            <div className="header">
              <div className="template-image">
                <img src={template.image} alt="Logo" />
              </div>
              <div className="template-body">
                <h4>{template.title}</h4>
                <p>{template.description}</p>
              </div>
            </div>
            <div className="footer">
              <h4>{template.footerTitle}</h4>
              <a href="">{template.footerLink}</a>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        perPage={perPage}
        setPerPage={setPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={templateData.length}
        firstIndex={firstIndex}
        lastIndex={lastIndex}
        handlePageChange={setCurrentPage}
        showPerPageSelect={false} // Hide the per-page dropdown in TemplateCard
      />
    </>
  );
}

export default TemplateCard;
