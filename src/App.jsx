import React, { useState } from "react";
import MenuBar from "./components/pages/menubar/MenuBar.jsx";
import Hero from "./components/pages/hero/Hero.jsx";
import End from "./components/pages/end/End.jsx";
import Project from "./components/pages/project/Project.jsx";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: isDark ? "black" : "white",
        // color: isDark ? "white" : "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        transition: "all 0.3s ease",
      }}
    >
      <MenuBar isDark={isDark} setIsDark={setIsDark} />

      {/* Hero */}
      <Hero isDark={isDark}></Hero>

      {/* Project */}
      <Project isDark={isDark}></Project>

      {/* End */}
      <End isDark={isDark} />

      {/* Test Container*/}
      {/* <div
        style={{
          width: "80%",
          height: "1300px",
          backgroundColor: "lightblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>This is the Test Container</h2>
      </div> */}
    </div>
  );
};

export default App;
