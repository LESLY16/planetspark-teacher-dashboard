function StudentModal({ student, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{student.name}</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        <p>Level: {student.level}</p>
        <p>Last Class: {student.lastClass}</p>
        <div className="progress-bar large">
          <div
            className="progress-fill"
            style={{ width: `${student.progress}%` }}
          />
        </div>
        <small>Overall progress: {student.progress}%</small>
      </div>
    </div>
  );
}

export default StudentModal;
