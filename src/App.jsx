import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCards from "./components/SummaryCards";
import ClassesList from "./components/ClassesList";
import StudentList from "./components/StudentList";
import DemoTracker from "./components/DemoTracker";
import DemoHistory from "./components/DemoHistory";
import StudentModal from "./components/StudentModal";

const initialClasses = [
  { id: 1, time: "5:00 PM", student: "Aarav", topic: "Grammar Basics", status: "Scheduled" },
  { id: 2, time: "6:00 PM", student: "Riya", topic: "Public Speaking", status: "Scheduled" },
  { id: 3, time: "7:00 PM", student: "Kabir", topic: "Creative Writing", status: "Scheduled" },
];

const initialStudents = [
  { id: 1, name: "Aarav", level: "Beginner", progress: 40, lastClass: "2026-10-01" },
  { id: 2, name: "Riya", level: "Intermediate", progress: 65, lastClass: "2026-10-03" },
  { id: 3, name: "Kabir", level: "Advanced", progress: 80, lastClass: "2026-10-02" },
];

const initialDemos = [
  { id: 1, date: "2026-09-28", student: "Aarav", status: "Completed" },
  { id: 2, date: "2026-09-29", student: "Riya", status: "Completed" },
  { id: 3, date: "2026-09-30", student: "Kabir", status: "Missed" },
];

function App() {
  const [theme, setTheme] = useState("light");
  const [classes, setClasses] = useState(initialClasses);
  const [students] = useState(initialStudents);
  const [demos, setDemos] = useState(initialDemos);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const updateClassStatus = (id, status) => {
    setClasses((prev) =>
      prev.map((cls) => (cls.id === id ? { ...cls, status } : cls))
    );
  };

  const addDemo = () => {
    const newDemo = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      student: "New Demo",
      status: "Completed",
    };
    setDemos((prev) => [...prev, newDemo]);
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`app ${theme}`}>
      <Sidebar />
      <div className="main">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <SummaryCards
          demoCount={demos.filter((d) => d.status === "Completed").length}
          studentCount={students.length}
          classCount={classes.length}
        />

        <div className="content-grid">
          <ClassesList
            classes={classes}
            updateClassStatus={updateClassStatus}
          />
          <StudentList
            students={filteredStudents}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSelectStudent={setSelectedStudent}
          />
        </div>

        <div className="content-grid bottom">
          <DemoTracker demoCount={demos.length} addDemo={addDemo} />
          <DemoHistory demos={demos} />
        </div>

        {selectedStudent && (
          <StudentModal
            student={selectedStudent}
            onClose={() => setSelectedStudent(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
