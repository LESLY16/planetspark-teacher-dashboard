function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div>
        <h1>PlanetSpark Teacher Dashboard</h1>
        <p className="subtitle">Track classes, students, and demos in one place.</p>
      </div>
      <div className="header-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
        <div className="icon-badge">🔔</div>
        <div className="avatar">LM</div>
      </div>
    </header>
  );
}

export default Header;
