function DemoTracker({ demoCount, addDemo }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Demo Tracker</h2>
        <span className="panel-subtitle">Track your demo performance</span>
      </div>
      <div className="demo-summary">
        <p className="demo-number">{demoCount}</p>
        <p className="demo-label">Total demos recorded</p>
      </div>
      <button onClick={addDemo}>Add Demo</button>
    </div>
  );
}

export default DemoTracker;
