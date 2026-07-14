import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

function RevenueSources({ data, centerLabel = 'Efficiency' }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const centerValue = data[0] ? `${Math.round((data[0].value / total) * 100)}%` : '0%';

  return (
    <div className="dash-glass-card dash-section-card" style={{ display: 'flex', flexDirection: 'column' }}>
      <h3 className="dash-title-lg">Revenue Sources</h3>
      <p className="dash-body-md dash-muted" style={{ marginTop: 4, marginBottom: 8 }}>
        Channel attribution breakdown
      </p>

      <div style={{ position: 'relative', width: '100%', height: 220 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius="70%"
              outerRadius="95%"
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="dash-headline-md">{centerValue}</div>
          <div className="dash-body-md dash-muted">{centerLabel}</div>
        </div>
      </div>

      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {data.map((entry) => (
          <div key={entry.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: entry.color,
                  display: 'inline-block',
                }}
              />
              <span className="dash-body-md">{entry.name}</span>
            </div>
            <span className="dash-body-md" style={{ fontWeight: 600 }}>
              {Math.round((entry.value / total) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RevenueSources;
