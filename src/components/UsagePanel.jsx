import React from 'react';

const UsagePanel = () => (
  <div
    id="usage"
    className="p-4 rounded shadow mb-4"
    style={{
      minHeight: '40vh',
      background: 'linear-gradient(to bottom right, #e0c3fc, #f9f9f9)',
      color: '#333',
    }}
  >
    <h3>📊 Resource Usage</h3>
    <ul>
      <li>CPU: 45%</li>
      <li>Memory: 72%</li>
    </ul>
  </div>
);

export default UsagePanel;
