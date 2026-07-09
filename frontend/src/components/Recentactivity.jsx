const icons = {
  Report: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
      <path d="M14 3v6h6" />
    </svg>
  ),
  Dashboard: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  'AI Insight': (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
    </svg>
  ),
  Team: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </svg>
  ),
};

const defaultActivity = [
  { name: 'Q3 Revenue Forecast', badge: 'Report', time: '2h ago' },
  { name: 'APAC Expansion Analysis', badge: 'Dashboard', time: 'Yesterday' },
  { name: 'Churn Risk Model', badge: 'AI Insight', time: '3d ago' },
  { name: 'Team Capacity Plan', badge: 'Team', time: '1 week ago' },
];

function RecentActivity({ items = defaultActivity, onItemClick }) {
  return (
    <>
      <div className="section-label">Recent</div>
      <div className="recent">
        {items.map((item, i) => (
          <div className="recent-item" key={i} onClick={() => onItemClick && onItemClick(item)}>
            <div className="recent-type-icon">{icons[item.badge]}</div>
            <div className="recent-info">
              <div className="recent-name">{item.name}</div>
              <div className="recent-meta">
                <span className="recent-badge">{item.badge}</span>
              </div>
            </div>
            <div className="recent-time">{item.time}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecentActivity;