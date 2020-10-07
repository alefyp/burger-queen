import React from 'react';
import '../css/NotFound.css';
import { useParams } from 'react-router-dom';

const Chef = () => {

  return (
    <div className="not-found">
      <h1>Chef's config</h1>
      <h2>{rolId}</h2>
    </div>
  );
}

export default Chef;