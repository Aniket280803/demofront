import React from 'react';

const SettingsPanel = () => (
  <div
    id="settings"
    className="p-4 rounded shadow mb-4"
    style={{
      minHeight: '40vh',
      background: 'linear-gradient(to bottom right, #e0c3fc, #f9f9f9)',
      color: '#333',
    }}
  >
    <h3>⚙️ Settings</h3>
    <ul>
      <li>Email: user@example.com</li>
      <li>Region: US-East</li>
    </ul>
  </div>
);

export default SettingsPanel;
