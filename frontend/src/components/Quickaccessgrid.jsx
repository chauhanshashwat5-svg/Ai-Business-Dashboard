const icons = {
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3v18h18" />
      <rect x="7" y="12" width="3" height="6" />
      <rect x="12" y="8" width="3" height="10" />
      <rect x="17" y="5" width="3" height="13" />
    </svg>
  ),
};

const defaultItems = [
  { key: 'dashboard', title: 'Dashboard', desc: 'Your workspace overview' },
  { key: 'analytics', title: 'Analytics', desc: 'Deep-dive into metrics' },
];

function QuickAccessGrid({ items = defaultItems, onCardClick }) {
  return (
    <>
      <div className="section-label">Jump to</div>
      <div className="grid">
        {items.map((item) => (
          <div className="grid-card" key={item.key} onClick={() => onCardClick && onCardClick(item)}>
            <div className="grid-icon">{icons[item.key]}</div>
            <div className="grid-title">{item.title}</div>
            <div className="grid-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default QuickAccessGrid;