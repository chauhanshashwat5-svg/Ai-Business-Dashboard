import { useState } from 'react';
import EmptyDashboardState from '../components/dashboard/EmptyDashboardState';
import UploadingState from '../components/dashboard/UploadingState';
import KpiCard from '../components/dashboard/KpiCard';
import RevenueChart from '../components/dashboard/RevenueChart';
import RevenueSources from '../components/dashboard/RevenueSources';
import RecentTransactionsTable from '../components/dashboard/RecentTransactionsTable';
import {
  demoKpis,
  demoRevenueChart,
  demoRevenueSources,
  demoTransactions,
} from '../data/demoDashboardData';
import '../styles/dashboardTheme.css';

// Dashboard has three states:
// 1. 'empty'      - no data uploaded yet, show the upload prompt
// 2. 'uploading'  - a file was picked, waiting on the backend to parse it
// 3. 'ready'      - real (or demo) data exists, show the full dashboard
//
// TODO (backend): replace handleFilesSelected's setTimeout with a real call to
// POST /api/upload-transactions (see project roadmap doc). On success, replace
// the demo* data below with the parsed + aggregated response from your API.

function Dashboard() {
  const [status, setStatus] = useState('empty');
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);

  const handleFilesSelected = (files) => {
    setUploadedFileName(files[0]?.name);
    setStatus('uploading');

    // Placeholder for the real upload + parse request. Swap this for:
    // const res = await fetch('/api/upload-transactions', { method: 'POST', body: formData })
    // const summary = await res.json();
    setTimeout(() => {
      setDashboardData({
        kpis: demoKpis,
        revenueChart: demoRevenueChart,
        revenueSources: demoRevenueSources,
        transactions: demoTransactions,
      });
      setStatus('ready');
    }, 1600);
  };

  const handleTryDemoData = () => {
    setDashboardData({
      kpis: demoKpis,
      revenueChart: demoRevenueChart,
      revenueSources: demoRevenueSources,
      transactions: demoTransactions,
    });
    setStatus('ready');
  };

  if (status === 'empty') {
    return (
      <div className="dash-theme">
        <EmptyDashboardState
          onFilesSelected={handleFilesSelected}
          onTryDemoData={handleTryDemoData}
        />
      </div>
    );
  }

  if (status === 'uploading') {
    return (
      <div className="dash-theme">
        <UploadingState fileName={uploadedFileName} />
      </div>
    );
  }

  return (
    <div className="dash-theme">
      <div className="dash-page">
        <div className="dash-page-header">
          <div>
            <h1 className="dash-headline-lg">Dashboard</h1>
            <p className="dash-body-md dash-muted" style={{ marginTop: 4 }}>
              Your workspace overview
            </p>
          </div>
          <button className="dash-btn-ghost" onClick={() => setStatus('empty')}>
            Upload more data
          </button>
        </div>

        <div className="dash-kpi-grid">
          {dashboardData.kpis.map((kpi) => (
            <KpiCard key={kpi.label} {...kpi} />
          ))}
        </div>

        <div
          className="dash-section-row"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32, marginBottom: 32 }}
        >
          <RevenueChart data={dashboardData.revenueChart} />
          <RevenueSources data={dashboardData.revenueSources} />
        </div>

        <RecentTransactionsTable
          rows={dashboardData.transactions}
          onExport={() => console.log('Export CSV clicked')}
        />
      </div>
    </div>
  );
}

export default Dashboard;
