import React from 'react';

const ActivityPanel = () => (
  <div
    id="activity"
    className="p-4 rounded shadow mb-4"
    style={{
      minHeight: '40vh',
      background: 'linear-gradient(to bottom right, #e0c3fc, #f9f9f9)', // lavender to light pink
      color: '#333',
    }}
  >
    <h3>📜 Recent Activity</h3>
    <ul>
      <li>Deployed app</li>
      <li>Created DB</li>
    </ul>
  </div>
);

export default ActivityPanel;
