function ClassesList({ classes, updateClassStatus }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Upcoming Classes</h2>
        <span className="panel-subtitle">Manage your schedule</span>
      </div>
      {classes.map((cls) => (
        <div key={cls.id} className="class-card">
          <div className="class-main">
            <div>
              <p className="class-time">{cls.time}</p>
              <p className="class-student">{cls.student}</p>
              <p className="class-topic">{cls.topic}</p>
            </div>
            <span className={`status-badge status-${cls.status.toLowerCase()}`}>
              {cls.status}
            </span>
          </div>
          <div className="class-actions">
            <button onClick={() => updateClassStatus(cls.id, "Completed")}>
              Mark Completed
            </button>
            <button
              className="secondary"
              onClick={() => updateClassStatus(cls.id, "Cancelled")}
            >
              Cancel
            </button>
            <button className="outline">Join Class</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClassesList;
