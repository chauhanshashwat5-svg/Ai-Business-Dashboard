const statusStyles = {
  COMPLETED: 'success',
  PROCESSING: 'info',
  OVERDUE: 'error',
  PENDING: 'warning',
};

const avatarColors = ['#c4c0ff', '#7bd0ff', '#ffb785'];

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function RecentTransactionsTable({ rows, onExport }) {
  return (
    <div className="dash-glass-card" style={{ overflow: 'hidden' }}>
      <div
        style={{
          padding: 32,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(70,69,85,0.2)',
        }}
      >
        <h4 className="dash-title-lg">Recent Transactions</h4>
        <button
          onClick={onExport}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#c4c0ff' }}
          className="dash-label-md"
        >
          Export CSV
        </button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="dash-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Invoice</th>
              <th>Revenue</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.invoice}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      className="dash-avatar-chip"
                      style={{
                        background: `${avatarColors[i % avatarColors.length]}33`,
                        color: avatarColors[i % avatarColors.length],
                      }}
                    >
                      {initials(row.customer)}
                    </div>
                    <span>{row.customer}</span>
                  </div>
                </td>
                <td style={{ fontFamily: 'monospace', fontSize: 12 }}>{row.invoice}</td>
                <td style={{ fontWeight: 700 }}>${row.amount.toLocaleString()}</td>
                <td>
                  <span className={`dash-badge dash-badge--${statusStyles[row.status] || 'info'}`}>
                    {row.status}
                  </span>
                </td>
                <td className="dash-muted" style={{ fontSize: 13 }}>{row.payment}</td>
                <td className="dash-muted" style={{ fontSize: 13 }}>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentTransactionsTable;
