function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">PS</div>
      <nav>
        <ul>
          <li className="active">Dashboard</li>
          <li>Students</li>
          <li>Classes</li>
          <li>Demos</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
