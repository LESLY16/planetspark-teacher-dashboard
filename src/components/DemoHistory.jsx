function DemoHistory({ demos }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Demo History</h2>
        <span className="panel-subtitle">Recent demo sessions</span>
      </div>
      <table className="demo-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Student</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {demos.map((d) => (
            <tr key={d.id}>
              <td>{d.date}</td>
              <td>{d.student}</td>
              <td>
                <span
                  className={`status-badge status-${d.status.toLowerCase()}`}
                >
                  {d.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoHistory;
