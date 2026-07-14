import { useState, useRef } from 'react';

const supportedFormats = [
  { icon: 'table_chart', label: 'Excel (.xlsx)' },
  { icon: 'csv', label: 'CSV' },
  { icon: 'picture_as_pdf', label: 'PDF reports' },
  { icon: 'point_of_sale', label: 'Sales reports' },
  { icon: 'account_balance', label: 'Bank statements' },
  { icon: 'inventory_2', label: 'Inventory sheets' },
  { icon: 'group', label: 'CRM exports' },
];

function EmptyDashboardState({ onFilesSelected, onTryDemoData }) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files || []);
    if (files.length && onFilesSelected) onFilesSelected(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length && onFilesSelected) onFilesSelected(files);
  };

  return (
    <div className="dash-empty-wrap">
      <div className="dash-glass-card dash-empty-card">
        <span className="material-symbols-outlined" style={{ fontSize: 40, color: '#c4c0ff' }}>
          auto_awesome
        </span>
        <h2 className="dash-headline-md" style={{ marginTop: 16 }}>
          Let's build your dashboard
        </h2>
        <p className="dash-body-lg dash-muted" style={{ marginTop: 8 }}>
          Upload your business data and Vantage will turn it into live charts,
          KPIs, and AI-written insights — no manual setup required.
        </p>

        <div
          className={`dash-upload-zone${isDragging ? ' dash-upload-zone--active' : ''}`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <div className="dash-upload-icon">
            <span className="material-symbols-outlined" style={{ fontSize: 26 }}>
              upload_file
            </span>
          </div>
          <p className="dash-body-md" style={{ fontWeight: 600 }}>
            Drag and drop a file, or click to browse
          </p>
          <p className="dash-label-md dash-muted" style={{ marginTop: 4 }}>
            Up to 25MB per file
          </p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept=".xlsx,.xls,.csv,.pdf"
            style={{ display: 'none' }}
            onChange={handleFileInput}
          />
        </div>

        <p className="dash-label-md dash-muted" style={{ marginBottom: 4 }}>
          SUPPORTED SOURCES
        </p>
        <div className="dash-format-grid">
          {supportedFormats.map((f) => (
            <span className="dash-format-chip" key={f.label}>
              <span className="material-symbols-outlined">{f.icon}</span>
              {f.label}
            </span>
          ))}
        </div>

        <div style={{ marginTop: 32, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button className="dash-btn-primary" onClick={() => inputRef.current?.click()}>
            Upload data
          </button>
          <button className="dash-btn-ghost" onClick={onTryDemoData}>
            Try with sample data
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmptyDashboardState;
