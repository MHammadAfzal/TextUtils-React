import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
function App() {
  const [navMode, setNavMode] = useState("light");

  const toggleMode = () => {
    if (navMode === "light") {
      setNavMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setNavMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={navMode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze" mode={navMode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
