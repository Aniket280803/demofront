import React from 'react';
import AppNavbar from '../components/Navbar';
import ServicePanel from '../components/ServicePanel';
import UsagePanel from '../components/UsagePanel';
import ActivityPanel from '../components/ActivityPanel';
import SettingsPanel from '../components/SettingsPanel';
import './Dashboard.css'; // Import styles

function Dashboard() {
  return (
    <>
      <AppNavbar />

      <div className="dashboard-container container-fluid">
        <div className="row h-100">
          <div className="col-12 col-md-6 p-2 h-50">
            <div className="dashboard-panel">
              <ServicePanel />
            </div>
          </div>
          <div className="col-12 col-md-6 p-2 h-50">
            <div className="dashboard-panel">
              <UsagePanel />
            </div>
          </div>
          <div className="col-12 col-md-6 p-2 h-50">
            <div className="dashboard-panel">
              <ActivityPanel />
            </div>
          </div>
          <div className="col-12 col-md-6 p-2 h-50">
            <div className="dashboard-panel">
              <SettingsPanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
