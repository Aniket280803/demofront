import React from 'react';

const ServicePanel = () => (
  <div
    id="services"
    className="p-4 rounded shadow mb-4"
    style={{
      minHeight: '40vh',
      background: 'linear-gradient(to bottom right, #e0c3fc, #f9f9f9)',
      color: '#333',
    }}
  >
    <h3>🧩 Services Overview</h3>
    <ul>
      <li>Compute Engine</li>
      <li>Storage</li>
      <li>Databases</li>
    </ul>
  </div>
);

export default ServicePanel;
