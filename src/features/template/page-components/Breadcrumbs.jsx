import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = ({ path, currentPath }) => {
  const pathParts = path.split('/').filter(part => part);
  const lastPart = pathParts[pathParts.length - 1];

  return (
    <nav className="breadcrumbs">
      {pathParts.map((part, index) => {
        const url = `/${pathParts.slice(0, index + 1).join('/')}`;
        const isActive = url === currentPath;
        const isLast = index === pathParts.length - 1;
        
        return (
          <React.Fragment key={url}>
            {isLast ? (
              <span className="breadcrumb-text">{part}</span>
            ) : (
              <Link to={url} className={isActive ? 'active' : ''}>
                {part}
              </Link>
            )}
            {index < pathParts.length - 1 && <span className="separator"> &gt; </span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
