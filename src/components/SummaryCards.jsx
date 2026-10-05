function SummaryCards({ demoCount, studentCount, classCount }) {
  return (
    <div className="summary-cards">
      <div className="card gradient-blue">
        <div className="card-icon">🎯</div>
        <h3>Demos Completed</h3>
        <p className="card-number">{demoCount}</p>
        <span className="card-label">Last 30 days</span>
      </div>

      <div className="card gradient-purple">
        <div className="card-icon">👨‍🎓</div>
        <h3>Active Students</h3>
        <p className="card-number">{studentCount}</p>
        <span className="card-label">Across all levels</span>
      </div>

      <div className="card gradient-orange">
        <div className="card-icon">📚</div>
        <h3>Upcoming Classes</h3>
        <p className="card-number">{classCount}</p>
        <span className="card-label">Today & tomorrow</span>
      </div>
    </div>
  );
}

export default SummaryCards;
