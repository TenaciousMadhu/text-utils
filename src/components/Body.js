import React from "react";

export default function Body(props) {
  let characters = props.text.length;
  let words = props.text === "" ? 0 : props.text.split(" ").length;

  function copyText() {
    document.getElementById("textarea").focus();
    navigator.clipboard.writeText(props.text);
    props.showAlert("Text copied");
  }

  return (
    <div className="container">
      <textarea
        style={props.styles}
        className="form-control mt-5 mb-3"
        id="textarea"
        rows="8"
        placeholder="Enter Text Here"
        onChange={props.handleChange}
        value={props.text}
      ></textarea>
      <button
        type="button"
        className="btn btn-dark mx-1"
        onClick={props.changeToUC}
      >
        Upper Case
      </button>
      <button
        type="button"
        className="btn btn-dark mx-1"
        onClick={props.changeToLC}
      >
        Lower Case
      </button>
      <button
        type="button"
        className="btn btn-dark mx-1"
        onClick={props.changeToTC}
      >
        Title Case
      </button>
      <button
        type="button"
        className="btn btn-dark mx-1"
        onClick={props.toggleBold}
      >
        <b>B</b>
      </button>
      <button
        type="button"
        className="btn btn-dark mx-1"
        onClick={props.toggleItalic}
      >
        <i>I</i>
      </button>
      <button
        style={{ fontFamily: "cursive" }}
        type="button"
        className="btn btn-dark mx-1"
        onClick={props.toggleUnderline}
      >
        <u>U</u>
      </button>
      <button type="button" className="btn btn-dark mx-1" onClick={copyText}>
        Copy
      </button>
      <button
        type="button"
        className="btn btn-dark mx-1"
        onClick={props.clearText}
      >
        Clear Text
      </button>
      <button
        type="button"
        className="btn btn-dark mx-1"
        onClick={props.removeExtraSpaces}
      >
        Remove Extra Spaces
      </button>
      <h2 className={`mt-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        Text Summary: <span className="summary">{words} Words,</span>{" "}
        <span className="summary">{characters} Characters</span>
      </h2>
    </div>
  );
}
