import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
function App() {
  const [navMode, setNavMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (navMode === "light") {
      setNavMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setNavMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const showAlert = (msg, alertType) => {
    setAlert({
      message: msg,
      type: alertType,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={navMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter your text to analyze"
          mode={navMode}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
