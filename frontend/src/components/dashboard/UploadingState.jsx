function UploadingState({ fileName }) {
  return (
    <div className="dash-empty-wrap">
      <div className="dash-glass-card dash-empty-card">
        <div className="dash-upload-icon" style={{ animation: 'dash-pulse 1.4s ease-in-out infinite' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 26 }}>
            sync
          </span>
        </div>
        <h2 className="dash-headline-md">Reading your data</h2>
        <p className="dash-body-md dash-muted" style={{ marginTop: 8 }}>
          {fileName ? `Parsing ${fileName}...` : 'Parsing your file...'} This
          usually takes a few seconds.
        </p>
        <style>{`
          @keyframes dash-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    </div>
  );
}

export default UploadingState;
