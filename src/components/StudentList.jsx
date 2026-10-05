function StudentList({ students, searchTerm, setSearchTerm, onSelectStudent }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Students</h2>
        <span className="panel-subtitle">Search and view profiles</span>
      </div>

      <input
        type="text"
        className="search-input"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {students.map((s) => (
        <div
          key={s.id}
          className="student-card"
          onClick={() => onSelectStudent(s)}
        >
          <div className="student-avatar">{s.name[0]}</div>
          <div className="student-info">
            <p className="student-name">{s.name}</p>
            <p className="student-level">{s.level}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${s.progress}%` }}
              />
            </div>
            <small>Progress: {s.progress}% • Last class: {s.lastClass}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
