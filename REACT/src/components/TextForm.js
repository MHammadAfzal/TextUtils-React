import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    //     console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    // setText("The UpperCase button was clicked\n" + newText);
    setText(newText);
  };

  const handleLoClick = () => {
    //     console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = (event) => {
    setText("");
  };

  const handleOnChange = (event) => {
    //     console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="9"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-2 text-center">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes reading</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
