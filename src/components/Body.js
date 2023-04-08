import React from "react";

export default function Body(props) {
  let characters = props.text.length;
  let words = props.text === "" ? 0 : props.text.split(" ").length;

  function copyText() {
    document.getElementById("textarea").focus();
    navigator.clipboard.writeText(props.text);
    props.text
      ? props.showAlert("Text copied")
      : props.showAlert("Enter some text");
  }

  return (
    <div className="container">
      <textarea
        style={props.styles}
        className={`form-control mt-5 mb-3 ${
          props.mode === "dark" ? "textArea" : ""
        }`}
        id="textarea"
        rows="8"
        placeholder="Enter Text Here"
        onChange={props.handleChange}
        value={props.text}
      ></textarea>
      <button
        type="button"
        style={props.bodyButtonStyles}
        className={`btn mx-1 ${
          props.text && props.textCase === "UC" ? "borderAdd" : "borderRemove"
        }`}
        onClick={props.changeToUC}
      >
        Upper Case
      </button>
      <button
        type="button"
        style={props.bodyButtonStyles}
        className={`btn mx-1 ${
          props.text && props.textCase === "LC" ? "borderAdd" : "borderRemove"
        }`}
        onClick={props.changeToLC}
      >
        Lower Case
      </button>
      <button
        type="button"
        style={props.bodyButtonStyles}
        className={`btn mx-1 ${
          props.text && props.textCase === "TC" ? "borderAdd" : "borderRemove"
        }`}
        onClick={props.changeToTC}
      >
        Title Case
      </button>
      <button
        type="button"
        style={props.bodyButtonStyles}
        className={`btn mx-1 ${
          props.text && props.styles.fontWeight === "bold"
            ? "borderAdd"
            : "borderRemove"
        }`}
        onClick={props.toggleBold}
      >
        <b>B</b>
      </button>
      <button
        type="button"
        style={props.bodyButtonStyles}
        className={`btn mx-1 ${
          props.text && props.styles.fontStyle === "italic"
            ? "borderAdd"
            : "borderRemove"
        }`}
        onClick={props.toggleItalic}
      >
        <i>I</i>
      </button>
      <button
        type="button"
        style={props.bodyButtonStyles}
        className={`btn mx-1 ${
          props.text && props.styles.textDecoration === "underline"
            ? "borderAdd"
            : "borderRemove"
        }`}
        onClick={props.toggleUnderline}
      >
        <u>U</u>
      </button>
      <button
        type="button"
        style={props.bodyButtonStyles}
        className="btn mx-1"
        onClick={copyText}
      >
        Copy
      </button>
      <button
        type="button"
        style={props.bodyButtonStyles}
        className="btn mx-1 borderRemove"
        onClick={props.clearText}
      >
        Clear Text
      </button>
      <button
        type="button"
        style={props.bodyButtonStyles}
        className="btn mx-1"
        onClick={props.removeExtraSpaces}
      >
        Remove Extra Spaces
      </button>
      <h2 className="mt-3" style={props.summaryStyles}>
        Text Summary: <span className="summary">{words} Words,</span>{" "}
        <span className="summary">{characters} Characters</span>
      </h2>
    </div>
  );
}
