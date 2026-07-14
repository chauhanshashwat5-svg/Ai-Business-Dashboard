import { useState } from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const ranges = ['Week', 'Month', 'Year'];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: '#1f1f28',
        border: '1px solid #464555',
        borderRadius: 10,
        padding: '10px 14px',
        fontSize: 12,
      }}
    >
      <div style={{ color: '#c7c4d8', marginBottom: 4 }}>{label}</div>
      {payload.map((p) => (
        <div key={p.dataKey} style={{ color: p.color, fontWeight: 600 }}>
          {p.name}: ${p.value.toLocaleString()}
        </div>
      ))}
    </div>
  );
}

function RevenueChart({ data, title = 'Revenue Analytics', subtitle = 'Comparative analysis of regional sales performance' }) {
  const [range, setRange] = useState('Month');

  return (
    <div className="dash-glass-card dash-section-card">
      <div className="dash-section-head">
        <div>
          <h3 className="dash-title-lg">{title}</h3>
          <p className="dash-body-md dash-muted" style={{ marginTop: 4 }}>{subtitle}</p>
        </div>
        <div className="dash-pill-group">
          {ranges.map((r) => (
            <button
              key={r}
              className={`dash-pill${range === r ? ' dash-pill--active' : ''}`}
              onClick={() => setRange(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer>
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#c7c4d8', fontSize: 12 }}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(196,192,255,0.05)' }} />
            <Bar dataKey="regionA" fill="#8781ff" opacity={0.55} radius={[4, 4, 0, 0]} name="Region A" />
            <Bar dataKey="regionB" fill="#7bd0ff" opacity={0.55} radius={[4, 4, 0, 0]} name="Region B" />
            <Line
              type="monotone"
              dataKey="trend"
              stroke="#c4c0ff"
              strokeWidth={2.5}
              dot={false}
              name="Trend"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;
