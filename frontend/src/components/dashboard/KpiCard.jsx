function KpiCard({ icon, iconVariant = 'primary', label, value, delta, deltaDirection = 'up', sparkline }) {
  return (
    <div className="dash-glass-card dash-kpi-card">
      <div className="dash-kpi-top">
        <span className={`dash-icon-badge dash-icon-badge--${iconVariant}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </span>
        {delta && (
          <span className={`dash-delta dash-delta--${deltaDirection}`}>
            {delta}
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
              {deltaDirection === 'up' ? 'arrow_upward' : 'arrow_downward'}
            </span>
          </span>
        )}
      </div>
      <div className="dash-kpi-value">{value}</div>
      <div className="dash-kpi-label">{label}</div>
      {sparkline && (
        <div className="dash-sparkline">
          {sparkline.map((h, i) => (
            <div
              key={i}
              className={`dash-sparkline-bar${h.active ? ' dash-sparkline-bar--active' : ''}`}
              style={{ height: `${h.value}%` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default KpiCard;
