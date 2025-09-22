import "./menubar/MenuBar.css";

function TestContainer({ isDark }) {
  return (
    <div className={`container ${isDark ? "dark" : "light"}`}>
      <h1>This is a test container</h1>
    </div>
  );
}
export default TestContainer;
