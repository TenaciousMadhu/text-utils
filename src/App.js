import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  const [mode, setMode] = useState("light");

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Body mode={mode} />
    </>
  );
}

export default App;
